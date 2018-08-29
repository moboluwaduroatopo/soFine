import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Material } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { JoinCompComponent } from './join-comp/join-comp.component';
import { CustomerViewComponent } from './homepages/customer-view/customer-view.component';
import { TailorViewComponent } from './homepages/tailor-view/tailor-view.component';
import { AboutComponent } from './guest-nav/about/about.component';
import { SupportComponent } from './guest-nav/support/support.component';
import { PrivacyComponent } from './guest-nav/privacy/privacy.component';
import { GuestDashComponent } from './guest-nav/guest-dash/guest-dash.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './join-comp/login/login.component';
import { JoinComponent } from './join-comp/join/join.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GuestNavComponent,
    JoinCompComponent,
    CustomerViewComponent,
    TailorViewComponent,
    AboutComponent,
    SupportComponent,
    PrivacyComponent,
    GuestDashComponent,
    LoginComponent,
    JoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
