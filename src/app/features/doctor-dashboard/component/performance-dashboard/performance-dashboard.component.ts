import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: any;
  grid: any;
  colors: any;
  dataLabels: ApexDataLabels;
  plotOptions:any
};

@Component({
  selector: 'app-performance-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './performance-dashboard.component.html',
  styleUrl: './performance-dashboard.component.scss'
})
export class PerformanceDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Patients',
        data: [22, 28, 24, 19, 26, 24, 20]
      }
    ],
    chart: {
      type: 'bar',
      height: 150,
      toolbar: { show: false }

    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '50%'
      }
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
      }
    },
    colors: ["#FF6B6B"],
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    }
  };
}