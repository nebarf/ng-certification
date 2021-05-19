import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinner } from "./loading-spinner/loading-spinner.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinner],
  exports: [LoadingSpinner],
})
export class AppComponentsModule {}
