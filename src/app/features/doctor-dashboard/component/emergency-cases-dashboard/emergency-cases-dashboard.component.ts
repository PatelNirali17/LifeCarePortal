import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency-cases-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './emergency-cases-dashboard.component.html',
  styleUrl: './emergency-cases-dashboard.component.scss'
})
export class EmergencyCasesDashboardComponent {

}
