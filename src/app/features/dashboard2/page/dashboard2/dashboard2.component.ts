import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DoctorPerformanceDashboardComponent } from '../../component/doctor-performance-dashboard/doctor-performance-dashboard.component';
import { PatientDetailsDashboardComponent } from '../../component/patient-details-dashboard/patient-details-dashboard.component';
import { RoomStatusDashboardComponent } from '../../component/room-status-dashboard/room-status-dashboard.component';
import { PatientVisitedDashboardComponent } from '../../component/patient-visited-dashboard/patient-visited-dashboard.component';

@Component({
  selector: 'app-dashboard2',
  imports: [SharedModule,DoctorPerformanceDashboardComponent,PatientDetailsDashboardComponent,RoomStatusDashboardComponent,PatientVisitedDashboardComponent],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.scss'
})
export class Dashboard2Component {

}
