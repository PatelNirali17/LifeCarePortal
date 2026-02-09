import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTabGroup } from '@angular/material/tabs';

interface Appointment {
  patientName: string;
  title: string;
  doctor: string;
  time: string;
}

@Component({
  selector: 'app-all-appointments-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-appointments-dashboard.component.html',
  styleUrl: './all-appointments-dashboard.component.scss'
})
export class AllAppointmentsDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  daysInMonth: string[] = [];
  currentMonthYear: string = '';
  appointments: { [key: string]: Appointment[] } = {};
  selectedTabIndex: number = 0;

  ngOnInit(): void {
    this.generateMonthDays();
    this.generateAppointments();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.tabGroup && this.tabGroup._tabHeader) {
        this.tabGroup._tabHeader._scrollToLabel(this.selectedTabIndex + 3);
      }
    });
  }

  generateMonthDays(): void {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    // Get the number of days in the current month
    const days = new Date(year, month + 1, 0).getDate();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Set header text (e.g., "February 2026")
    this.currentMonthYear = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    this.daysInMonth = [];
    for (let i = 1; i <= days; i++) {
      this.daysInMonth.push(`${i} ${monthNames[month]}`);
    }
    this.selectedTabIndex = date.getDate() - 1;
  }

  generateAppointments(): void {
    const mockDataSets: Appointment[][] = [
      [
        { patientName: 'Alice Brown', title: 'Meeting', doctor: '👨‍⚕️ Dr. Mehta', time: '09:00 AM' },
        { patientName: 'Alice Brown', title: 'Routine Check-Up', doctor: '👨‍⚕️ Dr. Verma', time: '10:00 AM' },
        { patientName: 'John Doe', title: 'Routine Check-Up', doctor: '👨‍⚕️ Dr. Verma', time: '11:00 AM' }
      ],
      [
        { patientName: 'Michael Smith', title: 'Dental Cleaning', doctor: '👨‍⚕️ Dr. Gupta', time: '02:00 PM' },
        { patientName: 'Sarah Lee', title: 'Consultation', doctor: '👨‍⚕️ Dr. Mehta', time: '03:30 PM' }
      ],
      [
        { patientName: 'David Kim', title: 'Follow-up', doctor: '👨‍⚕️ Dr. Khan', time: '09:15 AM' },
        { patientName: 'Emily Davis', title: 'Vaccination', doctor: '👨‍⚕️ Dr. Verma', time: '10:45 AM' },
        { patientName: 'James Wilson', title: 'Physical Therapy', doctor: '👨‍⚕️ Dr. Patel', time: '01:00 PM' },
        { patientName: 'Linda Martinez', title: 'Check-up', doctor: '👨‍⚕️ Dr. Gupta', time: '04:00 PM' }
      ],
      [
        { patientName: 'Robert Taylor', title: 'Blood Test', doctor: '👨‍⚕️ Dr. Khan', time: '08:30 AM' }
      ],
      [], // No appointments
      [
        { patientName: 'William Turner', title: 'X-Ray', doctor: '👨‍⚕️ Dr. Patel', time: '11:30 AM' },
        { patientName: 'Jessica White', title: 'Consultation', doctor: '👨‍⚕️ Dr. Mehta', time: '02:15 PM' }
      ]
    ];

    this.daysInMonth.forEach((day, index) => {
      this.appointments[day] = mockDataSets[index % mockDataSets.length];
    });
  }

  getAppointmentCount(day: string): number {
    return this.appointments[day]?.length || 0;
  }

}
