import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ChartComponent
} from "ng-apexcharts";
import { SharedModule } from '../../../../shared/shared.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  colors: string[];
};

@Component({
  selector: 'app-hospital-survey-dashboard',
  imports: [SharedModule],
  templateUrl: './hospital-survey-dashboard.component.html',
  styleUrls: ['./hospital-survey-dashboard.component.scss']
})
export class HospitalSurveyDashboardComponent  {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: ChartOptions;
  public selectedPeriod: string = 'Monthly';

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "New Patients",
          data: [31, 40, 28, 51, 42, 85, 77]
        },
        {
          name: "Old Patients",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 254,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: 'category',
        categories: ["jan'24", "feb'24", "mar'24", "apr'24", "may'24", "jun'24", "jul'24"]
      },
      colors: ['#2e7d32', '#FF6B6B']
    };
  }

  onPeriodChange(period: string) {
    this.selectedPeriod = period;

    switch (period) {
      case 'Daily':
        this.chartOptions.series = [
          {
            name: "New Patients",
            data: [5, 8, 6, 4, 7, 9, 10]
          },
          {
            name: "Old Patients",
            data: [2, 3, 4, 3, 5, 6, 7]
          }
        ];
        this.chartOptions.xaxis = {
          ...this.chartOptions.xaxis, type: 'category',
          categories: ["01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov"]
        };
        break;

      case 'Monthly':
        this.chartOptions.series = [
          {
            name: "New Patients",
            data: [31, 40, 28, 51, 42, 85, 77]
          },
          {
            name: "Old Patients",
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ];
        this.chartOptions.xaxis = {
          ...this.chartOptions.xaxis,
          type: 'category',
          categories: ["jan'24", "feb'24", "mar'24", "apr'24", "may'24", "jun'24", "jul'24"]
        };
        break;

      case 'Yearly':
        this.chartOptions.series = [
          { name: "New Patients", data: [200, 250, 300, 450, 600, 700, 800] },
          { name: "Old Patients", data: [120, 180, 200, 300, 400, 500, 600] }
        ];
        this.chartOptions.xaxis = {
          ...this.chartOptions.xaxis,
          type: 'category',
          categories: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
        };
        break;
    }
  }
}