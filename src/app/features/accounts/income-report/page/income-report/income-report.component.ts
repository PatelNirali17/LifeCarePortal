import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-income-report',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.scss']
})
export class IncomeReportComponent {
  incomeData = [
    {
      "Department": "Anatomy",
      "Jan": 2980.00,
      "Feb": 3480.00,
      "Mar": 1980.00,
      "Apr": 2080.00,
      "May": 2480.00,
      "Jun": 7680.00,
      "Jul": 8480.00,
      "Aug": 6680.00,
      "Sep": 1080.00,
      "Oct": 3280.00,
      "Nov": 2080.00,
      "Dec": 1680.00,
      "Yearly": 43960.00
    },
    {
      "Department": "Cardiology",
      "Jan": 5230.00,
      "Feb": 6150.00,
      "Mar": 7340.00,
      "Apr": 6890.00,
      "May": 8120.00,
      "Jun": 7560.00,
      "Jul": 9240.00,
      "Aug": 8450.00,
      "Sep": 7890.00,
      "Oct": 8760.00,
      "Nov": 7890.00,
      "Dec": 8430.00,
      "Yearly": 91950.00
    },
    {
      "Department": "Neurology",
      "Jan": 4560.00,
      "Feb": 5230.00,
      "Mar": 6780.00,
      "Apr": 5890.00,
      "May": 7120.00,
      "Jun": 6780.00,
      "Jul": 8230.00,
      "Aug": 7560.00,
      "Sep": 6890.00,
      "Oct": 7340.00,
      "Nov": 6780.00,
      "Dec": 7230.00,
      "Yearly": 80390.00
    },
    {
      "Department": "Orthopedics",
      "Jan": 3890.00,
      "Feb": 4560.00,
      "Mar": 5230.00,
      "Apr": 4890.00,
      "May": 6120.00,
      "Jun": 5780.00,
      "Jul": 7230.00,
      "Aug": 6560.00,
      "Sep": 5890.00,
      "Oct": 6340.00,
      "Nov": 5780.00,
      "Dec": 6230.00,
      "Yearly": 68500.00
    },
    {
      "Department": "Pediatrics",
      "Jan": 3120.00,
      "Feb": 3780.00,
      "Mar": 4230.00,
      "Apr": 3890.00,
      "May": 5120.00,
      "Jun": 4780.00,
      "Jul": 6230.00,
      "Aug": 5560.00,
      "Sep": 4890.00,
      "Oct": 5340.00,
      "Nov": 4780.00,
      "Dec": 5230.00,
      "Yearly": 56950.00
    }
  ];
}