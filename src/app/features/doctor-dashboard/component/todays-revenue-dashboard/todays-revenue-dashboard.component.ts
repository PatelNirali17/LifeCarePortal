import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexChart, ApexAxisChartSeries,ApexXAxis, ApexDataLabels, ApexStroke, ApexTooltip} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  yaxis: any
  grid: any
};
@Component({
  selector: 'app-todays-revenue-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './todays-revenue-dashboard.component.html',
  styleUrl: './todays-revenue-dashboard.component.scss'
})
export class TodaysRevenueDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Walk-ins: ₹1,850',
        data: [31, 40, 28, 51, 42, 40, 30]
      },
      {
        name: 'Follow-ups: ₹1,200',
        data: [25, 32, 30, 35, 40, 25, 30]
      },
      {
        name: 'Online Consults: ₹1,200',
        data: [15, 25, 20, 25, 30, 20, 15]
      }
    ],
    chart: {
      type: 'area',
      height: 217,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    },
    tooltip: {
      enabled: true
    },
  };

}
