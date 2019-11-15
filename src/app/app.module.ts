import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc.component';
import { CensoredPipe } from './censored.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalcComponent, CensoredPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
