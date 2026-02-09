import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-surgeries-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './upcoming-surgeries-dashboard.component.html',
  styleUrl: './upcoming-surgeries-dashboard.component.scss'
})
export class UpcomingSurgeriesDashboardComponent {
  UpcomingSurgeries = [
    {
      "patientName": "John Smith",
      "patientId": "PT-0025",
      "surgeryType": "Cardiac Bypass",
      "date": "15 June 2024",
      "time": "09:00-11:30",
      "doctor": "Dr. Sarah Johnson",
      "status": "Scheduled"
    },
    {
      "patientName": "Emily Davis",
      "patientId": "PT-0078",
      "surgeryType": "Appendectomy",
      "date": "15 June 2024",
      "time": "13:00-14:30",
      "doctor": "Dr. Michael Chen",
      "status": "Urgent"
    },
    {
      "patientName": "Robert Wilson",
      "patientId": "PT-0036",
      "surgeryType": "Knee Replacement",
      "date": "16 June 2024",
      "time": "10:00-12:30",
      "doctor": "Dr. James Miller",
      "status": "Scheduled"
    },
    {
      "patientName": "Maria Garcia",
      "patientId": "PT-0042",
      "surgeryType": "Cataract Removal",
      "date": "16 June 2024",
      "time": "14:00-15:00",
      "doctor": "Dr. Lisa Wong",
      "status": "Delayed"
    },
    {
      "patientName": "Daniel Thompson",
      "patientId": "PT-0084",
      "surgeryType": "Hip Replacement",
      "date": "17 June 2024",
      "time": "08:30-11:00",
      "doctor": "Dr. Angela Roberts",
      "status": "Scheduled"
    },
    {
      "patientName": "Sophia Martinez",
      "patientId": "PT-0092",
      "surgeryType": "Tonsillectomy",
      "date": "17 June 2024",
      "time": "12:00-13:00",
      "doctor": "Dr. Kevin Patel",
      "status": "Urgent"
    },
    {
      "patientName": "William Anderson",
      "patientId": "PT-0067",
      "surgeryType": "Spinal Fusion",
      "date": "18 June 2024",
      "time": "09:00-12:00",
      "doctor": "Dr. Rachel Green",
      "status": "Scheduled"
    },
    {
      "patientName": "Olivia Brown",
      "patientId": "PT-0055",
      "surgeryType": "Gallbladder Removal",
      "date": "18 June 2024",
      "time": "13:30-15:00",
      "doctor": "Dr. Henry Liu",
      "status": "Delayed"
    },
    {
      "patientName": "Liam Walker",
      "patientId": "PT-0101",
      "surgeryType": "Hernia Repair",
      "date": "19 June 2024",
      "time": "10:00-11:30",
      "doctor": "Dr. Emily Turner",
      "status": "Scheduled"
    }
  ]


}
