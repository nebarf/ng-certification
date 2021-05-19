import { NgModule } from "@angular/core";
import { WeatherConditionIconPipe } from "./weather-condition-icon/weather-condition-icon.pipe";

@NgModule({
  imports: [],
  declarations: [WeatherConditionIconPipe],
  exports: [WeatherConditionIconPipe],
})
export class AppPipesModule {}
