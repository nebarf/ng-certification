import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routing-config";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
