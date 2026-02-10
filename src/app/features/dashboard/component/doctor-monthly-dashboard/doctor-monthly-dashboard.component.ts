import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
interface DayEvent {
  date: Date;
  title: string;
}
@Component({
  selector: 'app-doctor-monthly-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './doctor-monthly-dashboard.component.html',
  styleUrl: './doctor-monthly-dashboard.component.scss'
})
export class DoctorMonthlyDashboardComponent implements OnInit {
  currentDate = new Date();
  groupedEvents: { date: Date; events: DayEvent[] }[] = [];

  // Expanded list of all events to simulate fetching data for different months
  private allEvents: DayEvent[] = [
    // January 2026
    { date: new Date(2026, 0, 15), title: '1 Surgery, 1 Consultation' },
    { date: new Date(2026, 0, 22), title: '2 Followup Appointment' },

    // February 2026
    { date: new Date(2026, 1, 6), title: '2 Followup Appointment' },
    { date: new Date(2026, 1, 7), title: '1 Surgery, 1 Consultation' },
    { date: new Date(2026, 1, 8), title: '1 Polyclinic Visit, 1 Followup Appointment' },
    { date: new Date(2026, 1, 10), title: '1 Surgery, 1 Followup Appointment' },
    { date: new Date(2026, 1, 11), title: '1 Followup Appointment' },
    { date: new Date(2026, 1, 17), title: '1 Followup Appointment, 1 Evaluation' },
    { date: new Date(2026, 1, 20), title: '1 Surgery' },
    { date: new Date(2026, 1, 21), title: '1 Followup Appointment, 1 Ward Round' },
    { date: new Date(2026, 1, 23), title: '2 Surgery' },
    { date: new Date(2026, 1, 28), title: '1 Polyclinic Visit' },

    // March 2026
    { date: new Date(2026, 2, 5), title: '1 Conference' },
    { date: new Date(2026, 2, 12), title: '3 Followup Appointment' },
    { date: new Date(2026, 2, 13), title: '1 Surgery' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.filterEventsForMonth();
  }

  getEventType(title: string): string {
    const lowerCaseTitle = title.toLowerCase();
    if (lowerCaseTitle.includes('surgery')) {
      return 'surgery';
    }
    if (lowerCaseTitle.includes('consultation')) {
      return 'consultation';
    }
    if (lowerCaseTitle.includes('followup')) {
      return 'followup';
    }
    if (lowerCaseTitle.includes('polyclinic')) {
      return 'polyclinic';
    }
    if (lowerCaseTitle.includes('evaluation')) {
      return 'evaluation';
    }
    if (lowerCaseTitle.includes('ward round')) {
      return 'ward';
    }
    if (lowerCaseTitle.includes('conference')) {
      return 'conference';
    }
    return 'default';
  }

  getEventIcon(title: string): string {
    const type = this.getEventType(title);
    switch (type) {
      case 'surgery': return 'healing';
      case 'consultation': return 'people_alt';
      case 'followup': return 'event_repeat';
      case 'polyclinic': return 'local_hospital';
      case 'evaluation': return 'rate_review';
      case 'ward': return 'group';
      case 'conference': return 'business_center';
      default: return 'event_note';
    }
  }

  private filterEventsForMonth(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const monthEvents = this.allEvents
      .filter(event =>
        event.date.getFullYear() === year && event.date.getMonth() === month
      )
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    if (monthEvents.length === 0) {
      this.groupedEvents = [];
      return;
    }

    const eventMap = new Map<string, DayEvent[]>();
    for (const event of monthEvents) {
      const dateString = event.date.toDateString();
      const dayEvents = eventMap.get(dateString) || [];
      dayEvents.push(event);
      eventMap.set(dateString, dayEvents);
    }

    this.groupedEvents = Array.from(eventMap.entries()).map(([dateStr, events]) => ({
      date: new Date(dateStr),
      events: events
    }));
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = new Date(this.currentDate); // Create new date object to trigger change detection
    this.filterEventsForMonth();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = new Date(this.currentDate); // Create new date object to trigger change detection
    this.filterEventsForMonth();
  }
}
