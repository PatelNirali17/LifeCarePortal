import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ApexFill, ApexStroke, ApexLegend } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: string[];
  fill: ApexFill;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-appointment-review-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './appointment-review-dashboard.component.html',
  styleUrl: './appointment-review-dashboard.component.scss'
})
export class AppointmentReviewDashboardComponent {
  chartOptions: ChartOptions = {
    series: [67, 55, 44],
    chart: {
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        dataLabels: {
          name: {
            show: true
          },
          value: {
            show: true
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return "249";
            }
          }

        }
      }
    },
    labels: ["Face To Face", "E-Consult", "Available"],
    fill: {
      opacity: 1
    },
    stroke: {
      lineCap: "round"
    },
    legend: {
      show: true,
      floating: true,
      position: "bottom"
    }
  };
}
