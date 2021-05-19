import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { LocationOpenWeather, LocationOpenForecast } from 'src/app/models/location-weather.model';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherHttpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Performs an http request to retrieve to weather of a given location zipcode.
   */
  getWeather(zipCode: string): Observable<LocationOpenWeather> {
    return this.httpClient.get<LocationOpenWeather>(
      `${environment.weatherApiBaseUrl}/weather?zip=${zipCode}&appid=${environment.weatherApiKey}`
    );
  }

  /**
   * Performs an http request to retrieve to weather of a given location zipcode.
   */
  getForecast(zipCode: string): Observable<LocationOpenForecast> {
    return this.httpClient.get<LocationOpenForecast>(
      `${environment.weatherApiBaseUrl}/forecast?zip=${zipCode}&appid=${environment.weatherApiKey}`
    );
  }
}
