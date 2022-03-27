import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { AttributeDirective } from './attribute.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
