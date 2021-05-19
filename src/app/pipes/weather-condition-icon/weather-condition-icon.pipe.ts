import { Pipe, PipeTransform } from "@angular/core";
import { WeatherCondition } from "src/app/models/location-weather.model";

@Pipe({
  name: 'weatherConditionIcon',
})
export class WeatherConditionIconPipe implements PipeTransform {
  /**
   * Maps each type of weather condition in the associated icon path. 
   */
  static weatherConditionToIconMap: { [key in WeatherCondition]: string } = {
    [WeatherCondition.Clear]: 'assets/sun.png',
    [WeatherCondition.Snow]: 'assets/snow.png',
    [WeatherCondition.Rain]: 'assets/rain.png',
    [WeatherCondition.Clouds]: 'assets/clouds.png',
  };

  /**
   * Transforms a weather condition in the corresponding icon path.
   */
  transform(value: WeatherCondition): string {
    const weatherIcon = WeatherConditionIconPipe.weatherConditionToIconMap[value];
    return weatherIcon || '';
  }
}
