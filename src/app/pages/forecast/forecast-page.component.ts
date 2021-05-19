import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { LocationStorage } from "src/app/services/locations-storage/location-storage";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast-page.component.html',
})
export class ForecastPageComponent implements OnInit {
  /**
   * The form group to handle the addition of a new location.
   */
  addLocationFormGroup: FormGroup;

  /**
   * The list of tracked locations.
   */
  locations$: Observable<string[]> = this.locationsStorage.zipCodes$;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly locationsStorage: LocationStorage,
  ) {}

  /**
   * Creates the form add-location form group.
   */
  ngOnInit(): void {
    this.addLocationFormGroup = this.formBuilder.group({
      zipCode: ['', Validators.required]
    });
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
}
