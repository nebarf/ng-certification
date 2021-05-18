import { Observable } from "rxjs";

export abstract class LocationStorage {
  /**
   * Returns the current set of stored zipcodes.
   */
  abstract get zipCodes(): string[];

  /**
   * Returns the current set of stored zipcodes.
   */
  abstract get zipCodes$(): Observable<string[]>;

  /**
   * Adds an item to the list of tracked zipcodes.
   */
  abstract add(zipCode: string): void;

  /**
   * Removes an item from the list of tracked zipcodes.
   */
  abstract remove(zipCode: string): void;

  /**
   * Clears the zipcodes.
   */
  abstract clear(): void;

  /**
   * Resets the set of zip codes by assigning a fresh new ones.
   */
  abstract assign(codes: string[]);
}
