import { Component } from '@angular/core';
import { DoctorAppointmentsDashboardComponent } from '../../component/doctor-appointments-dashboard/doctor-appointments-dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PerformanceDashboardComponent } from '../../component/performance-dashboard/performance-dashboard.component';
import { TodaysRevenueDashboardComponent } from '../../component/todays-revenue-dashboard/todays-revenue-dashboard.component';
import { PatientsSurvayDashboardComponent } from '../../component/patients-survay-dashboard/patients-survay-dashboard.component';
import { DoctorDetailsDashboardComponent } from '../../component/doctor-details-dashboard/doctor-details-dashboard.component';
import { TaskHoursDashboardComponent } from '../../component/task-hours-dashboard/task-hours-dashboard.component';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [DoctorAppointmentsDashboardComponent,SharedModule,PerformanceDashboardComponent,TodaysRevenueDashboardComponent,PatientsSurvayDashboardComponent,
    DoctorDetailsDashboardComponent, TaskHoursDashboardComponent
  ],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss'
})
export class DoctorDashboardComponent {

}
