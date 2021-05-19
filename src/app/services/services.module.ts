import { NgModule } from "@angular/core";
import { LocationStorage } from "./locations-storage/location-storage";
import { LocationsLocalStorageService } from "./locations-storage/locations-local-storage.service";

@NgModule({
  providers: [
    {
      provide: LocationStorage,
      useClass: LocationsLocalStorageService,
    }
  ],
})
export class AppServicesModule {}
