import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { JoinCompComponent } from './join-comp/join-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestNavComponent,
    JoinCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
