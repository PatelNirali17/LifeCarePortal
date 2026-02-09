import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-chart-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-chart-dashboard.component.html',
  styleUrl: './patient-chart-dashboard.component.scss'
})
export class PatientChartDashboardComponent implements OnInit {
  chartOptions: any;
  IsDaily: boolean = true;
  IsWeekly: boolean = false;
  IsMonthly: boolean = false;

  private dailyData = [22, 15, 20, 18];
  private weeklyData = [95, 80, 90, 85];
  private monthlyData = [320, 280, 370, 317];

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'donut',
        width: 400, height: 170
      },
      labels: ['Dengue', 'Typhoid', 'Malaria', 'Cold'],
      colors: ['#6A0572', '#D4AF37', '#FF6B6B', '#6bb8ff'],
      legend: { show: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 300 },
            legend: { position: 'bottom' }
          }
        }
      ],
    };
  }

  ngOnInit(): void {
    this.ShowDaily();
  }

  ShowDaily() {
    this.IsDaily = true;
    this.IsWeekly = false;
    this.IsMonthly = false;
    this.updateChartSeries(this.dailyData);
  }
  ShowWeekly() {
    this.IsDaily = false;
    this.IsWeekly = true;
    this.IsMonthly = false;
    this.updateChartSeries(this.weeklyData);
  }
  ShowMonthly() {
    this.IsDaily = false;
    this.IsWeekly = false;
    this.IsMonthly = true;
    this.updateChartSeries(this.monthlyData);
  }

  private updateChartSeries(newSeries: number[]) {
    this.chartOptions = {
      ...this.chartOptions,
      series: newSeries
    };
  }
}
