import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'numberRound'
})
export class NumberRoundPipe implements PipeTransform {
  /**
   * Transforms the provided number by rounding it to the nearest integer.
   */
  transform(value: number, fallbackValue: number = 0): number {
    if (!Number.isFinite(value)) {
      return fallbackValue;
    }
    return Math.round(value);
  }
}
