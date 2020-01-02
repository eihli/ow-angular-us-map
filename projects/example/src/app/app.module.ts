import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwAngularUsMapModule } from 'ow-angular-us-map'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwAngularUsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
