import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { HeroDeckComponent } from './hero-deck/hero-deck.component';
import { StatusColumnComponent } from './status-column/status-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDeckComponent,
    StatusColumnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
