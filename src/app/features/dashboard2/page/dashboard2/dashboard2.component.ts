import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DoctorPerformanceDashboardComponent } from '../../component/doctor-performance-dashboard/doctor-performance-dashboard.component';
import { PatientDetailsDashboardComponent } from '../../component/patient-details-dashboard/patient-details-dashboard.component';
import { RoomStatusDashboardComponent } from '../../component/room-status-dashboard/room-status-dashboard.component';
import { PatientVisitedDashboardComponent } from '../../component/patient-visited-dashboard/patient-visited-dashboard.component';
import { DiseasesChartDashboardComponent } from '../../component/diseases-chart-dashboard/diseases-chart-dashboard.component';
import { RecentReportDashboardComponent } from '../../component/recent-report-dashboard/recent-report-dashboard.component';
import { PatientsGroupDashboardComponent } from '../../component/patients-group-dashboard/patients-group-dashboard.component';
import { RecentCommentsDashboardComponent } from '../../component/recent-comments-dashboard/recent-comments-dashboard.component';
import { RecentActivityDashboardComponent } from '../../component/recent-activity-dashboard/recent-activity-dashboard.component';

@Component({
  selector: 'app-dashboard2',
  imports: [SharedModule,DoctorPerformanceDashboardComponent,PatientDetailsDashboardComponent,RoomStatusDashboardComponent,PatientVisitedDashboardComponent,
    DiseasesChartDashboardComponent,RecentReportDashboardComponent,PatientsGroupDashboardComponent,RecentCommentsDashboardComponent,
    RecentActivityDashboardComponent
  ],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.scss'
})
export class Dashboard2Component {

}
