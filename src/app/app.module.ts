import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppServicesModule } from './services/services.module';
import { AppComponentsModule } from './components/components.module';
import { AppPagesModule } from './pages/pages.module';
import { AppRoutingModule } from './routing/routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule,
    AppServicesModule,
    AppRoutingModule,
    AppComponentsModule,
    AppPagesModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
