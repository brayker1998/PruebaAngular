import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';


import { HereosModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    
  ],
  imports: [
    BrowserModule,
    HereosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
