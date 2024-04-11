import { Component, OnInit } from '@angular/core';

interface CalendarDay {
  date: Date;
  events: Event[];
}

interface Event {
  title: string;
  time: string; // Could be a Date object for more complex timing needs
  description?: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  currentMonth: Date;
  daysInMonth: CalendarDay[];

  constructor() {
    this.currentMonth = new Date();
    this.daysInMonth = [];
  }

  ngOnInit() {
    this.loadMonth(this.currentMonth);
  }

  loadMonth(date: Date) {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    for (let d = startDay; d <= endDay; d.setDate(d.getDate() + 1)) {
      days.push({
        date: new Date(d),
        events: this.getEventsForDay(d)
      });
    }

    this.daysInMonth = days;
  }

  getEventsForDay(date: Date): Event[] {
    // This would normally fetch from a store or backend
    return []; // Placeholder
  }

  addEventToDay(day: CalendarDay, event: Event) {
    day.events.push(event);
    // Here you might want to save to local storage or send to a backend
  }

  showEvents(day: CalendarDay) {
    console.log('Events on ', day.date.toDateString(), ':', day.events);
    // Implement further logic here to show events (e.g., modal, alert, new component view)
  }

}
