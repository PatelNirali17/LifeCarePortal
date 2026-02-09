import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexPlotOptions, ApexDataLabels, ApexLegend } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: any
};

@Component({
  selector: 'app-number-of-patients-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './number-of-patients-dashboard.component.html',
  styleUrl: './number-of-patients-dashboard.component.scss'
})
export class NumberOfPatientsDashboardComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: "Male",
        data: [44, 55, 57, 56, 61, 58]
      },
      {
        name: "Female",
        data: [78, 85, 101, 98, 87, 105]
      }
    ],
    chart: {
      type: "bar",
      height: 315,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    colors: ['#6A0572', "#5e5873"],
    legend: {
      position: "bottom"
    }
  };
}
