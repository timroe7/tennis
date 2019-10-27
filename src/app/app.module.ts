import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './counter/counter.component';
import { GameService } from './game.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,
                  BrowserAnimationsModule, MatTooltipModule],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GameService]
})
export class AppModule { }
