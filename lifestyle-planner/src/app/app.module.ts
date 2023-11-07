// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MotivationComponent } from './motivation/motivation.component';
import { CalendarComponent } from './calendar/calendar.component';
// Other imports...

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MotivationComponent,
    CalendarComponent,
    // Other components...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Other modules...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
