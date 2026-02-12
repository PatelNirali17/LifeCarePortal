import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-recent-report-dashboard',
  imports: [SharedModule],
  templateUrl: './recent-report-dashboard.component.html',
  styleUrl: './recent-report-dashboard.component.scss'
})
export class RecentReportDashboardComponent {
  chartOptions: any = {
    series: [350, 450, 100],
    chart: {
      type: 'donut',
      width: 400, height: 220
    },
    labels: ['India', 'USA', 'Itely'],
    colors: ['#b9a80e', '#2e7d32', '#2196F3'],
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ],
    dataLabels: {
      enabled: false
    }
  };
}
