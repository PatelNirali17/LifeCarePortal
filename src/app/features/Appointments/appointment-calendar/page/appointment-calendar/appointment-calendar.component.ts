import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Appointment {
  Name: string;
  Doctor: string;
  Gender: string;
  DateofBirth: string;
  Address: string;
  AppointmentDate: string;
  AppointmentTime: string;
  Mobile: string;
  Email: string;
  AppointmentStatus: string;
  VisitType: string;
  Injury: string;
  PaymentStatus: string | null;
  InsuranceProvider: string;
  Notes: string;
}

interface CalendarDay {
  date: Date | null;
  dayNumber: number | null;
  appointments: Appointment[];
}

@Component({
  selector: 'app-appointment-calendar',
  imports: [SharedModule, CommonModule],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.scss'
})
export class AppointmentCalendarComponent implements OnInit {
  appointments: Appointment[] = [];
  calendarDays: CalendarDay[] = [];
  // Default to the current month
  currentMonth: Date = new Date(); 
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.http.get<Appointment[]>('/json/db-data/all-appointment.json').subscribe({
      next: (data) => {
        this.appointments = data;
        this.generateCalendar();
      },
      error: (err) => console.error('Failed to load appointments', err)
    });
  }

  generateCalendar() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    this.calendarDays = [];

    // Add empty placeholders for days before the 1st of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      this.calendarDays.push({ date: null, dayNumber: null, appointments: [] });
    }

    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      
      // Filter appointments for this specific day
      const dayAppointments = this.appointments.filter(app => {
        if (!app.AppointmentDate) return false;
        const parts = app.AppointmentDate.split('/');
        if (parts.length !== 3) return false;
        
        const day = parseInt(parts[0], 10);
        const monthVal = parseInt(parts[1], 10) - 1; // 0-indexed
        const yearVal = parseInt(parts[2], 10);

        return day === i && monthVal === month && yearVal === year;
      });

      this.calendarDays.push({ 
        date: date, 
        dayNumber: i, 
        appointments: dayAppointments 
      });
    }
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }
  
  isToday(day: CalendarDay): boolean {
    if (!day.date) return false;
    const today = new Date();
    return day.date.getDate() === today.getDate() &&
           day.date.getMonth() === today.getMonth() &&
           day.date.getFullYear() === today.getFullYear();
  }
}
