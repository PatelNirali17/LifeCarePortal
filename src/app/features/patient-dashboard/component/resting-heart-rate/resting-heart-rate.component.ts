import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke } from "ng-apexcharts";

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
  selector: 'app-resting-heart-rate',
  imports: [SharedModule],
  templateUrl: './resting-heart-rate.component.html',
  styleUrl: './resting-heart-rate.component.scss'
})
export class RestingHeartRateComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: "Rate",
        data: [69, 75, 72, 69, 75, 80, 87]
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
      colors: ["#D4AF37"],
      strokeWidth: 2,
      hover: {
        size: 8
      }
    },

    colors: ["#D4AF37"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    title: {
      text: "72 bmp(Avarage)",
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
