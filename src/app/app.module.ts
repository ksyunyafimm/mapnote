import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { NumberPipe } from './number.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RandomIdService } from './random-id.service';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RandomIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
