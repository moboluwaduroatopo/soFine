 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { AboutComponent } from './guest-nav/about/about.component';
import { SupportComponent } from './guest-nav/support/support.component';
import { PrivacyComponent } from './guest-nav/privacy/privacy.component';
import { GuestDashComponent } from './guest-nav/guest-dash/guest-dash.component';
import { LoginComponent } from './join-comp/login/login.component';
import { RegComponent } from './join-comp/reg/reg.component';
import { ForgotComponent } from './join-comp/forgot/forgot.component';
import { DashboardComponent } from './homepages/customer-view/dashboard/dashboard.component';

const appRoutes:Routes = [
  {
    path:'',
    component: GuestDashComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path:'privacy',
    component: PrivacyComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'reg',
    component:RegComponent
  },
  {
    path:'forgot',
     component:ForgotComponent
  },
  {
    path:'dashboard',
     component:DashboardComponent
  },
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[ RouterModule ]
  })
export class AppRoutingModule { }
