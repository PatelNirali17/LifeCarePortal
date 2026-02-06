import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RestingHeartRateComponent } from '../../component/resting-heart-rate/resting-heart-rate.component';
import { PerformanceHeartRateComponent } from '../../component/performance-heart-rate/performance-heart-rate.component';
import { MedicationsDashboardComponent } from '../../component/medications-dashboard/medications-dashboard.component';
import { AppointmentDashboardComponent } from '../../component/appointment-dashboard/appointment-dashboard.component';
import { ReportDocumentDashboardComponent } from '../../component/report-document-dashboard/report-document-dashboard.component';

@Component({
  selector: 'app-patient-dashboard',
  imports: [SharedModule,CommonModule,RestingHeartRateComponent,PerformanceHeartRateComponent,MedicationsDashboardComponent,AppointmentDashboardComponent,
    ReportDocumentDashboardComponent
  ],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {

}
