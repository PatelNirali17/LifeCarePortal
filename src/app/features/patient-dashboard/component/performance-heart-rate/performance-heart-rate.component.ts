import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke } from "ng-apexcharts";
import { SharedModule } from '../../../../shared/shared.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  colors: any,
  markers: any,
  yaxis:any
};

@Component({
  selector: 'app-performance-heart-rate',
  imports: [SharedModule],
  templateUrl: './performance-heart-rate.component.html',
  styleUrl: './performance-heart-rate.component.scss'
})
export class PerformanceHeartRateComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: "Rate",
        data: [113, 120, 130, 120, 125, 119, 126]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      background: "#ffffff", 
      toolbar: { show: false }
    },
    markers: {
      size: 6,
      colors: ["#FF6B6B"],
      strokeWidth: 2,
      hover: {
        size: 8
      }
    },

    colors: ["#FF6B6B"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    title: {
      text: "129 bmp(Avarage)",
      align: "left"
    },
    xaxis: {
      categories: ["Son", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      title: {
        text: "Weekdays"
      }

    },
    yaxis: {
      title: {
        text: "Heart Rate" 
      }
    },

  };
}
