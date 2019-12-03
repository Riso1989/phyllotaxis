import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhyllotaxisComponent } from './phyllotaxis/phyllotaxis.component';

@NgModule({
  declarations: [
    AppComponent,
    PhyllotaxisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
