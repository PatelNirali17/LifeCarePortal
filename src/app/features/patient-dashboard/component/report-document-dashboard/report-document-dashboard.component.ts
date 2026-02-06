import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-document-dashboard',
  imports: [SharedModule,CommonModule],
  templateUrl: './report-document-dashboard.component.html',
  styleUrl: './report-document-dashboard.component.scss'
})
export class ReportDocumentDashboardComponent {
 reportlist = ['Blood Report', 'Mediclaim Documents', 'Doctor Prescription', 'X-Ray Files', 'Urine Report', 'Scanned Documents', 'Eye Test Report', 'Dental Records', 'Lab Results Summary', 'MRI Scan Files', 'Vaccination Certificate', 'Health Assessment']
}
