import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-hours-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './task-hours-dashboard.component.html',
  styleUrl: './task-hours-dashboard.component.scss'
})
export class TaskHoursDashboardComponent {

}
