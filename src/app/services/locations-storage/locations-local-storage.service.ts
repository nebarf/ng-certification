import { Injectable } from '@angular/core';
import { LocationsMemoryStorageService } from './locations-memory-storage.service';

@Injectable()
export class LocationsLocalStorageService extends LocationsMemoryStorageService {
  /**
   * The unique key to use to store the locations in local storage.
   */
  static key: string = 'weatherApp__locations';

  constructor() {
    super();
    
    const currItems = this.storage.getItem(LocationsLocalStorageService.key);
    const parsedZipCodes = this.parseStringifiedZipCodes(currItems);

    this.assign(parsedZipCodes);
  }

  /**
   * Gets the window local storage.
   */
  private get storage(): Storage {
    return window.localStorage;
  }

  /**
   * Stringify a set of zipcodes.
   */
  private stringifyZipCodes(codes: string[]): string {
    return JSON.stringify(codes);
  }

  /**
   * Parse a stringified zipcodes.
   */
  private parseStringifiedZipCodes(stringifiedCodes: string): string[] {
    try {
      const parsedCodes = JSON.parse(stringifiedCodes);
      if (!Array.isArray(parsedCodes)) {
        console.warn('[LocationsLocalStorageService] The parsed zipcodes is not an array type.');
        return [];
      }

      return parsedCodes;
    } catch (err) {
      console.warn('[LocationsLocalStorageService] An error occurred while trying to parse stringified zipcodes.', err);
      return [];
    }
  }

  /**
   * @inheritdoc
   */
  add(zipCode: string): void {
    const strigifiedStoredZipCodes = this.storage.getItem(LocationsLocalStorageService.key);
    if (!strigifiedStoredZipCodes) {
      const newStrigifiedStoredZipCodes = this.stringifyZipCodes([zipCode]);
      this.storage.setItem(LocationsLocalStorageService.key, newStrigifiedStoredZipCodes);

      return super.add(zipCode);
    }

    const parsedStoredZipCodes = this.parseStringifiedZipCodes(strigifiedStoredZipCodes);
    const alreadyAdded = parsedStoredZipCodes.some((item: string) => item === zipCode);
    if (alreadyAdded) {
      return super.add(zipCode);
    }

    const newZipcodes = [...parsedStoredZipCodes, zipCode];
    this.storage.setItem(LocationsLocalStorageService.key, this.stringifyZipCodes(newZipcodes));

    super.add(zipCode);
  }

  /**
   * @inheritdoc
   */
  remove(zipCode: string): void {
    const strigifiedStoredZipCodes = this.storage.getItem(LocationsLocalStorageService.key);
    const parsedZipCodes = this.parseStringifiedZipCodes(strigifiedStoredZipCodes);

    const newZipCodes = parsedZipCodes.filter((item: string) => item !== zipCode);

    this.storage.setItem(LocationsLocalStorageService.key, this.stringifyZipCodes(newZipCodes));
    super.remove(zipCode);
  }

  /**
   * @inheritdoc
   */
  clear(): void {
    this.storage.removeItem(LocationsLocalStorageService.key);
    super.clear();
  }
}
