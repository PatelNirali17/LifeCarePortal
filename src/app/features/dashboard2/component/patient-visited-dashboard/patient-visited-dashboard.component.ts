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
  fill: any
};

@Component({
  selector: 'app-patient-visited-dashboard',
  imports: [SharedModule],
  templateUrl: './patient-visited-dashboard.component.html',
  styleUrl: './patient-visited-dashboard.component.scss'
})
export class PatientVisitedDashboardComponent {
  data = [150, 600, 300, 450, 225, 140];
  maxValue = Math.max(...this.data);
  chartOptions: any = {
    series: [
      {
        name: 'Patients',
        data: this.data
      }
    ],
    chart: {
      type: 'bar',
       height: 283,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '50%',
        distributed: true
      }
    },
    colors: this.data.map(value => value === this.maxValue ? '#198754' : '#a0a0a0'), 
    xaxis: {
      categories: ["2021", "2020", "2019", "2018", "2017", "2016"],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { labels: { show: false } },
    grid: { show: false },
    dataLabels: { enabled: false }
  };

}
