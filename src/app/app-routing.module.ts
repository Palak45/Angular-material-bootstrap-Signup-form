import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarComponent} from '../app/calendar/calendar.component';
import {AppComponent} from '../app/app.component';
import {LoginSignupComponent} from '../app/login-signup/login-signup.component';
const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'calender',
    component: CalendarComponent
  },
  {
    path:'signin',
    component: LoginSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
