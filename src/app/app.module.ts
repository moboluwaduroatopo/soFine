import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { JoinCompComponent } from './join-comp/join-comp.component';
import { CustomerViewComponent } from './homepages/customer-view/customer-view.component';
import { TailorViewComponent } from './homepages/tailor-view/tailor-view.component';
import { AboutComponent } from './guest-nav/about/about.component';
import { SupportComponent } from './guest-nav/support/support.component';
import { PrivacyComponent } from './guest-nav/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestNavComponent,
    JoinCompComponent,
    CustomerViewComponent,
    TailorViewComponent,
    AboutComponent,
    SupportComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
