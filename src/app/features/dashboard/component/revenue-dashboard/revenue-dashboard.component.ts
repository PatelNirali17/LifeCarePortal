import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: any;
  grid: any;
  colors: any;
  dataLabels: ApexDataLabels;
  plotOptions: any
};

@Component({
  selector: 'app-revenue-dashboard',
  imports: [SharedModule],
  templateUrl: './revenue-dashboard.component.html',
  styleUrl: './revenue-dashboard.component.scss'
})
export class RevenueDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Profile',
        data: [210, 235, 400, 201, 210, 140, 110, 135, 400]
      }
    ],
    chart: {
      type: 'bar',
      toolbar: { show: false }

    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '50%'
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
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
    colors: ["#198754"],
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
