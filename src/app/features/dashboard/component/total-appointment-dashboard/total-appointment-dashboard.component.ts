import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-appointment-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './total-appointment-dashboard.component.html',
  styleUrl: './total-appointment-dashboard.component.scss'
})
export class TotalAppointmentDashboardComponent {

}
