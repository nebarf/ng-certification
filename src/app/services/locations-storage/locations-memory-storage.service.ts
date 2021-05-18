import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocationStorage } from "./location-storage";

@Injectable()
export class LocationsMemoryStorageService extends LocationStorage {
  /**
   * A subject keeping track of locations zip codes.
   */
  protected _zipCodes$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  /**
   * @inheritdoc
   */
  get zipCodes(): string[] {
    return this._zipCodes$.value;
  }

  /**
   * @inheritdoc
   */
  get zipCodes$(): Observable<string[]> {
    return this._zipCodes$.asObservable();
  }

  /**
   * @inheritdoc
   */
  add(zipCode: string): void {
    const zipCodes = this._zipCodes$.value;
    const alreadyExists = zipCodes.some((item: string) => item === zipCode);
    
    if (alreadyExists) {
      return;
    }

    const newZipeCodes = [...zipCodes, zipCode];
    this._zipCodes$.next(newZipeCodes);
  }

  /**
   * @inheritdoc
   */
  remove(zipCode: string): void {
    const zipCodes = this._zipCodes$.value;
    const newZipCodes = zipCodes.filter((item: string) => item !== zipCode);

    this._zipCodes$.next(newZipCodes);
  }

  /**
   * @inheritdoc
   */
  assign(codes: string[]) {
    this._zipCodes$.next(codes);
  }

  /**
   * @inheritdoc
   */
  clear(): void {
    this._zipCodes$.next([]);
  }
}
