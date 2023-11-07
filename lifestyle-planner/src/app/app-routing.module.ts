// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MotivationComponent } from './motivation/motivation.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'calendar', component: CalendarComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
