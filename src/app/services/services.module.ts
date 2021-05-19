import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LocationStorage } from "./locations-storage/location-storage";
import { LocationsLocalStorageService } from "./locations-storage/locations-local-storage.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: LocationStorage,
      useClass: LocationsLocalStorageService,
    }
  ],
})
export class AppServicesModule {}
