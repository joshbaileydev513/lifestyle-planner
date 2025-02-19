import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    // **Register the plugins here**:
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],

    // Initial display: 'dayGridMonth', 'timeGridWeek', or 'timeGridDay'
    initialView: 'dayGridMonth',

    // Configure the calendar's header toolbar
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },

    // Array of events (loaded or updated in ngOnInit)
    events: [],

    // Allow selecting a day/time range or single day
    selectable: true,

    // Allow drag-and-drop of existing events
    editable: true,

    // Click handlers
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.handleDateClick.bind(this)
  };

  constructor() {}

  ngOnInit() {
    // Example: load events (static or from an API)
    this.loadEvents();
  }

  loadEvents() {
    // Example static data
    const sampleEvents = [
      {
        title: 'Meeting with Team',
        start: '2025-03-10T10:00:00',
        end: '2025-03-10T11:00:00'
      },
      {
        title: 'Dentist Appointment',
        start: '2025-03-13T09:30:00'
      },
      {
        title: 'Gym Session',
        start: '2025-03-15T07:00:00'
      }
    ];

    // Assign the events to calendarOptions
    this.calendarOptions.events = sampleEvents;
  }

  handleEventClick(clickInfo: EventClickArg) {
    alert('Event: ' + clickInfo.event.title);
  }

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
