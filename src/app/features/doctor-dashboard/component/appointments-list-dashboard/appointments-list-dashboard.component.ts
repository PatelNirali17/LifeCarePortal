import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments-list-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './appointments-list-dashboard.component.html',
  styleUrl: './appointments-list-dashboard.component.scss'
})
export class AppointmentsListDashboardComponent {

}
