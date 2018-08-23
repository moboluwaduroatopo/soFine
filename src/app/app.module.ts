import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { JoinCompComponent } from './join-comp/join-comp.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { TailorViewComponent } from './tailor-view/tailor-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestNavComponent,
    JoinCompComponent,
    CustomerViewComponent,
    TailorViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
