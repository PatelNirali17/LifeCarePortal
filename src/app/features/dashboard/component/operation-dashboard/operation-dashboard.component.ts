import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-operation-dashboard',
  imports: [SharedModule],
  templateUrl: './operation-dashboard.component.html',
  styleUrl: './operation-dashboard.component.scss'
})
export class OperationDashboardComponent {
  OperationList = [
  {
    "PatientName": "John Deo",
    "DoctorsTeam": 4,
    "DateOfOperation": "12-08-2019",
    "Duration": "3 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "12-09-2019",
    "Report": "Cancer",
    "Diseases": "Cancer",
    "Image": "image"
  },
  {
    "PatientName": "Jens Brincker",
    "DoctorsTeam": 3,
    "DateOfOperation": "14-08-2019",
    "Duration": "2 hours",
    "AnesthesiaType": "Local",
    "FollowUpDate": "14-09-2019",
    "Report": "Fracture",
    "Diseases": "Fracture",
    "Image": "image"
  },
  {
    "PatientName": "Alice Johnson",
    "DoctorsTeam": 5,
    "DateOfOperation": "20-08-2019",
    "Duration": "1.5 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "20-09-2019",
    "Report": "Appendicitis",
    "Diseases": "Appendicitis",
    "Image": "image"
  },
  {
    "PatientName": "Robert Brown",
    "DoctorsTeam": 3,
    "DateOfOperation": "25-08-2019",
    "Duration": "2 hours",
    "AnesthesiaType": "Local",
    "FollowUpDate": "25-09-2019",
    "Report": "Hernia",
    "Diseases": "Hernia",
    "Image": "image"
  },
  {
    "PatientName": "Sophia Clark",
    "DoctorsTeam": 6,
    "DateOfOperation": "30-08-2019",
    "Duration": "2.5 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "30-09-2019",
    "Report": "Gallstones",
    "Diseases": "Gallstones",
    "Image": "image"
  },
  {
    "PatientName": "Liam Davis",
    "DoctorsTeam": 4,
    "DateOfOperation": "05-09-2019",
    "Duration": "2 hours",
    "AnesthesiaType": "Local",
    "FollowUpDate": "05-10-2019",
    "Report": "Knee Injury",
    "Diseases": "Knee Injury",
    "Image": "image"
  },
  {
    "PatientName": "Emma Wilson",
    "DoctorsTeam": 3,
    "DateOfOperation": "10-09-2019",
    "Duration": "1 hour",
    "AnesthesiaType": "Local",
    "FollowUpDate": "10-10-2019",
    "Report": "Cataract",
    "Diseases": "Cataract",
    "Image": "image"
  },
  {
    "PatientName": "Olivia Martinez",
    "DoctorsTeam": 5,
    "DateOfOperation": "15-09-2019",
    "Duration": "4 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "15-10-2019",
    "Report": "Cardiac",
    "Diseases": "Cardiac",
    "Image": "image"
  },
  {
    "PatientName": "William Johnson",
    "DoctorsTeam": 4,
    "DateOfOperation": "20-09-2019",
    "Duration": "5 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "20-10-2019",
    "Report": "Spinal",
    "Diseases": "Spinal",
    "Image": "image"
  },
  {
    "PatientName": "Mia Brown",
    "DoctorsTeam": 3,
    "DateOfOperation": "25-09-2019",
    "Duration": "3 hours",
    "AnesthesiaType": "General",
    "FollowUpDate": "25-10-2019",
    "Report": "Obesity",
    "Diseases": "Obesity",
    "Image": "image"
  }
]


}
