import { Routes } from "@angular/router";
import { ForecastDetailPageComponent } from "../pages/forecast-detail/forecast-detail-page.component";
import { ForecastPageComponent } from "../pages/forecast/forecast-page.component";

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forecast',
  },
  {
    path: 'forecast',
    component: ForecastPageComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastDetailPageComponent,
  }
];
