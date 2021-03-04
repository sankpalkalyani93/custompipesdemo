import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {sqrt} from './sqrtpipe';
import {sum} from './sumpipe';
import {area} from './areapipe';

@NgModule({
  declarations: [
    sqrt,
    sum,
    area,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class sqrtpipe { }
