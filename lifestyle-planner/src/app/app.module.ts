import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MotivationComponent } from './motivation/motivation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { QuotesService } from './services/quotes.service';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MotivationComponent,
    CalendarComponent,
    StickyNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
