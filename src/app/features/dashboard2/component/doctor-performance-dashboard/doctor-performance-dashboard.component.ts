import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexStroke, ApexTooltip } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  colors: any
  markers:any
};

@Component({
  selector: 'app-doctor-performance-dashboard',
  imports: [SharedModule],
  templateUrl: './doctor-performance-dashboard.component.html',
  styleUrl: './doctor-performance-dashboard.component.scss'
})
export class DoctorPerformanceDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Doctor 1',
        data: [70, 200, 80, 180, 170, 105, 210]
      },
      {
        name: 'Doctor 2',
        data: [80, 250, 30, 120, 260, 100, 120]
      },
      {
        name: 'Doctor 3',
        data: [85, 130, 85, 225, 80, 190, 180]
      }
    ],
    chart: {
      type: 'area',
      height: 255,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 3,
    colors: ['#5d2c61', '#9c7e1a', '#0c5e38'],
      strokeWidth: 2,
      hover: {
        size: 8
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    colors: ['#5d2c61', '#9c7e1a', '#0c5e38'],
    tooltip: {
      enabled: true
    },
  };
}
