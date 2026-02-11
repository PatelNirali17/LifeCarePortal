import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-appointments-dashboard',
  imports: [SharedModule],
  templateUrl: './appointments-dashboard.component.html',
  styleUrl: './appointments-dashboard.component.scss'
})
export class AppointmentsDashboardComponent {
  AppointmentList = [
    {
      "PatientName": "John Doe",
      "AssignedDoctor": "Dr.Jacob Ryan",
      "Date": "12/05/2016",
      "Diseases": "Fever",
      "Image": "image"
    },
    {
      "PatientName": "Sarah Smith",
      "AssignedDoctor": "Dr.Rajesh",
      "Date": "12/05/2016",
      "Diseases": "Cholera",
      "Image": "image"
    },
    {
      "PatientName": "Airi Satou",
      "AssignedDoctor": "Dr.Jay Soni",
      "Date": "12/05/2016",
      "Diseases": "Jaundice",
      "Image": "image"
    },
    {
      "PatientName": "Angelica Ramos",
      "AssignedDoctor": "Dr.John Deo",
      "Date": "12/05/2016",
      "Diseases": "Typhoid",
      "Image": "image"
    },
    {
      "PatientName": "Ashton Cox",
      "AssignedDoctor": "Dr.Megha Trivedi",
      "Date": "12/05/2016",
      "Diseases": "Malaria",
      "Image": "image"
    },
    {
      "PatientName": "Cara Stevens",
      "AssignedDoctor": "Dr.Sarah Smith",
      "Date": "12/05/2016",
      "Diseases": "Infection",
      "Image": "image"
    },
    {
      "PatientName": "Michael Brown",
      "AssignedDoctor": "Dr.Anna Taylor",
      "Date": "12/05/2016",
      "Diseases": "Pneumonia",
      "Image": "image"
    },
    {
      "PatientName": "Emily White",
      "AssignedDoctor": "Dr.Kate Wilson",
      "Date": "12/05/2016",
      "Diseases": "Diabetes",
      "Image": "image"
    },
    {
      "PatientName": "James Green",
      "AssignedDoctor": "Dr.Nina Patel",
      "Date": "12/05/2016",
      "Diseases": "Hypertension",
      "Image": "image"
    },
    {
      "PatientName": "Olivia Black",
      "AssignedDoctor": "Dr.Ethan Clark",
      "Date": "12/05/2016",
      "Diseases": "Asthma",
      "Image": "image"
    }
  ]

}
