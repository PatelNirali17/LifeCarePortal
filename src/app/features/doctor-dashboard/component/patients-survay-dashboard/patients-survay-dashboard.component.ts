import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexStroke, ApexTooltip } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  colors:any
};

@Component({
  selector: 'app-patients-survay-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './patients-survay-dashboard.component.html',
  styleUrl: './patients-survay-dashboard.component.scss'
})
export class PatientsSurvayDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'New Patients',
        data: [31, 40, 28, 51, 42, 85, 77]
      },
      {
        name: 'Old Patients',
        data: [11, 32, 45, 32, 34, 52, 41]
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
    xaxis: {
      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    },
    colors: ['#6A0572', '#D4AF37'],
    tooltip: {
      enabled: true
    },
  };
}
