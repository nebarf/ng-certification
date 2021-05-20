import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, forkJoin, iif, Observable, of } from 'rxjs';
import { catchError, delay, map, startWith, switchMap, tap } from 'rxjs/operators';
import { LocationOpenWeather } from 'src/app/models/location-weather.model';
import { OpenWeatherHttpService } from 'src/app/services/http/open-weather-http.service';

import { LocationStorage } from 'src/app/services/locations-storage/location-storage';

export interface LocationOpenWeatherVM {
  openWeather: LocationOpenWeather;
  zipCode: string;
  errored?: boolean;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css'],
})
export class ForecastPageComponent implements OnInit {
  /**
   * The form group to handle the addition of a new location.
   */
  addLocationFormGroup: FormGroup;

  /**
   * The list of tracked locations.
   */
  zipCodes$: Observable<string[]> = this.locationsStorage.zipCodes$;

  /**
   * The list of locations tracked by the user.
   */
  locations$: Observable<LocationOpenWeatherVM[]>;

  /**
   * A flag telling whether the loading of locations is in progress or not.
   */
  private readonly _isLoadingLocations$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * Caches the locations data.
   */
  private readonly _locationCache = new Map<string, LocationOpenWeatherVM>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly locationsStorage: LocationStorage,
    private readonly openWeatherHttpService: OpenWeatherHttpService
  ) {}

  /**
   * Creates the form add-location form group.
   */
  ngOnInit(): void {
    this.addLocationFormGroup = this.formBuilder.group({
      zipCode: ['', Validators.required],
    });

    this.locations$ = this.locationsStorage.zipCodes$.pipe(
      delay(0),
      tap(() => this._isLoadingLocations$.next(true)),
      switchMap((codes: string[]) => {
        if (!codes.length) {
          return of([]);
        }

        const weatherRequests = codes.map((zipCode) => {
          const cachedLocation = this._locationCache.get(zipCode);
          if (cachedLocation) {
            return of(cachedLocation);
          }

          return this.openWeatherHttpService
            .getWeather(zipCode)
            .pipe(
              map((weather: LocationOpenWeather) => ({ openWeather: weather, zipCode })),
              tap((locationOpenWeatherVM: LocationOpenWeatherVM) => this._locationCache.set(zipCode, locationOpenWeatherVM)),
              catchError(() => of({
                errored: true,
                zipCode,
                weather: null,
              })),
            );
        });
        return forkJoin(weatherRequests);
      }),
      tap(() => this._isLoadingLocations$.next(false)),
    );
  }

  /**
   * Exposes the observable telling if the loading of locations is in progress or not.
   */
  get isLoadingLocations$(): Observable<boolean> {
    return this._isLoadingLocations$.asObservable();
  }

  /**
   * Handles the click on the button to add a new location to the list
   * of followed ones.
   */
  addLocationCliked(): void {
    if (this.addLocationFormGroup.invalid) {
      return;
    }

    const enteredZipCode = this.addLocationFormGroup.get('zipCode').value;
    this.locationsStorage.add(enteredZipCode);
    this.addLocationFormGroup.reset();
  }

  /**
   * Handles the click on the button to remove a location from the list
   * of followed ones.
   */
  removeLocationClicked(locationZipCode: string): void {
    this.locationsStorage.remove(locationZipCode);
  }

  /**
   * Handles the click on clear button to reset locations storage and cache.
   */
  resetCliked(): void {
    this.locationsStorage.clear();
    this._locationCache.clear();
  }
}
