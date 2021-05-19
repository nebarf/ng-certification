import { NgModule } from "@angular/core";
import { NumberRoundPipe } from "./number-round/number-round.pipe";
import { UnixTimestampFormatPipe } from "./unix-timestamp-format/unix-timestamp-format.pipe";
import { WeatherConditionIconPipe } from "./weather-condition-icon/weather-condition-icon.pipe";

@NgModule({
  imports: [],
  declarations: [WeatherConditionIconPipe, UnixTimestampFormatPipe, NumberRoundPipe],
  exports: [WeatherConditionIconPipe, UnixTimestampFormatPipe, NumberRoundPipe],
})
export class AppPipesModule {}
