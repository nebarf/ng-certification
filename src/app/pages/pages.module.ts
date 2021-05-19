import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponentsModule } from "../components/components.module";
import { AppPipesModule } from "../pipes/pipes.module";
import { ForecastDetailPageComponent } from "./forecast-detail/forecast-detail-page.component";
import { ForecastPageComponent } from "./forecast/forecast-page.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AppPipesModule, AppComponentsModule],
  declarations: [ForecastPageComponent, ForecastDetailPageComponent],
})
export class AppPagesModule {}
