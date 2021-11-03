import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LevelStatusComponent } from './level-status.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LevelStatusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
