import { Pipe, PipeTransform } from "@angular/core";
import { unix } from 'moment';

@Pipe({
  name: 'unixTimestampFormat',
})
export class UnixTimestampFormatPipe implements PipeTransform {
  /**
   * Formats the provided stringified unix timestamp.
   */
  transform(value: number, format: string): string {
    const momentDate = unix(value);
    if (!momentDate.isValid) {
      return '';
    }

    return momentDate.format(format);
  }
}
