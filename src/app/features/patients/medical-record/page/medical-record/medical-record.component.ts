import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

export interface MedicalRecord {
  date: string;
  time: string;
  activity_type: string;
  status?: string;
  notes: string;
  doctor?: string;
  attachments?: number;
  medical_team?: string;
}

@Component({
  selector: 'app-medical-record',
  imports: [SharedModule,CommonModule],
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.scss'
})
export class MedicalRecordComponent {
  medicalHistory: MedicalRecord[] = [
    {
      "date": "2017-12-25",
      "time": "03:45",
      "activity_type": "X-Ray",
      "status": "No Activity",
      "notes": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
    },
    {
      "date": "2020-08-25",
      "time": "12:13",
      "activity_type": "Medication",
      "notes": "Generate new patient id and fill the form following basic procedures."
    },
    {
      "date": "2020-08-25",
      "time": "13:30",
      "activity_type": "Consultation",
      "doctor": "Dr. Sarah Smith",
      "notes": "Initial patient consultation."
    },
    {
      "date": "2020-08-25",
      "time": "14:00",
      "activity_type": "Prescription",
      "doctor": "Dr. Sarah Smith",
      "attachments": 3,
      "notes": "Prescription written with necessary advice to patient."
    },
    {
      "date": "2020-08-29",
      "time": "13:30",
      "activity_type": "Consultation",
      "doctor": "Dr. Sarah Smith",
      "notes": "Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer."
    },
    {
      "date": "2020-09-03",
      "time": "22:30",
      "activity_type": "Operation",
      "medical_team": "Doctor Team",
      "notes": "Pianoforte principles our unaffected not for astonished travelling are particular."
    },
    {
      "date": "2020-09-04",
      "time": "14:00",
      "activity_type": "Prescription",
      "doctor": "Dr. Sarah Smith",
      "attachments": 2,
      "notes": "Prescription written with necessary advice to patient."
    },
    {
      "date": "2020-08-25",
      "time": "13:30",
      "activity_type": "Consultation",
      "doctor": "Dr. John Deo",
      "notes": "General consultation."
    }
  ]

  getActivityIcon(activity: string): string {
    const icons: { [key: string]: string } = {
      'x-ray': '☢️',
      'medication': '💊',
      'consultation': '🩺',
      'prescription': '🧾',
      'operation': '💉'
    };
    return icons[activity.toLowerCase()] || '📋';
  }
}
