import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MessageService]
})
export class AppModule { }
