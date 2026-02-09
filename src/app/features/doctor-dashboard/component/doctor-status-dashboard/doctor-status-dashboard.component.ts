import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-status-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './doctor-status-dashboard.component.html',
  styleUrl: './doctor-status-dashboard.component.scss'
})
export class DoctorStatusDashboardComponent {

}
