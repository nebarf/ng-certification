import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ForecastDetailPageComponent } from "./forecast-detail/forecast-detail-page.component";
import { ForecastPageComponent } from "./forecast/forecast-page.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ForecastPageComponent, ForecastDetailPageComponent],
})
export class AppPagesModule {}
