import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { LocationOpenForecast } from "src/app/models/location-weather.model";
import { OpenWeatherHttpService } from "src/app/services/http/open-weather-http.service";

@Component({
  selector: 'app-forecast-deail',
  templateUrl: './forecast-detail-page.component.html',
})
export class ForecastDetailPageComponent implements OnInit {
  /**
   * The forecast of a location.
   */
  locationForecast$: Observable<LocationOpenForecast>;

  constructor(private openWeatherHttpService: OpenWeatherHttpService, private activatedRoute: ActivatedRoute) {}

  /**
   * Fetch the forecast of a location.
   */
  ngOnInit(): void {
    this.locationForecast$ = this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('zipcode')),
      switchMap((zipCode) => this.openWeatherHttpService.getForecast(zipCode)),
    );
  }
}
