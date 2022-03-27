import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { NumberPipe } from './number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
