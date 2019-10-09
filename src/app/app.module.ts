import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './counter/counter.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, CounterComponent, HomePageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
