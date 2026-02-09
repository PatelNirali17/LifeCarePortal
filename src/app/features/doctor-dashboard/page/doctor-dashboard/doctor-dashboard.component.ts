import { Component } from '@angular/core';
import { DoctorAppointmentsDashboardComponent } from '../../component/doctor-appointments-dashboard/doctor-appointments-dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PerformanceDashboardComponent } from '../../component/performance-dashboard/performance-dashboard.component';
import { TodaysRevenueDashboardComponent } from '../../component/todays-revenue-dashboard/todays-revenue-dashboard.component';
import { PatientsSurvayDashboardComponent } from '../../component/patients-survay-dashboard/patients-survay-dashboard.component';
import { DoctorDetailsDashboardComponent } from '../../component/doctor-details-dashboard/doctor-details-dashboard.component';
import { TaskHoursDashboardComponent } from '../../component/task-hours-dashboard/task-hours-dashboard.component';
import { AppointmentsListDashboardComponent } from '../../component/appointments-list-dashboard/appointments-list-dashboard.component';
import { EmergencyCasesDashboardComponent } from '../../component/emergency-cases-dashboard/emergency-cases-dashboard.component';
import { AppointmentReviewDashboardComponent } from '../../component/appointment-review-dashboard/appointment-review-dashboard.component';
import { DoctorStatusDashboardComponent } from '../../component/doctor-status-dashboard/doctor-status-dashboard.component';
import { NumberOfPatientsDashboardComponent } from '../../component/number-of-patients-dashboard/number-of-patients-dashboard.component';
import { TodoListDashboardComponent } from '../../component/todo-list-dashboard/todo-list-dashboard.component';
import { UpcomingSurgeriesDashboardComponent } from '../../component/upcoming-surgeries-dashboard/upcoming-surgeries-dashboard.component';
import { PatientFeedbackDashboardComponent } from '../../component/patient-feedback-dashboard/patient-feedback-dashboard.component';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [DoctorAppointmentsDashboardComponent,SharedModule,PerformanceDashboardComponent,TodaysRevenueDashboardComponent,PatientsSurvayDashboardComponent,
    DoctorDetailsDashboardComponent, TaskHoursDashboardComponent,AppointmentsListDashboardComponent,EmergencyCasesDashboardComponent,
    AppointmentReviewDashboardComponent,DoctorStatusDashboardComponent,NumberOfPatientsDashboardComponent,TodoListDashboardComponent,
    UpcomingSurgeriesDashboardComponent,PatientFeedbackDashboardComponent
  ],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss'
})
export class DoctorDashboardComponent {

}
