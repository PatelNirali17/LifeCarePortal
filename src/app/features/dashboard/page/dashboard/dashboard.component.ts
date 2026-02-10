import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexStroke, ApexTooltip } from 'ng-apexcharts';
import { PatientChartDashboardComponent } from '../../component/patient-chart-dashboard/patient-chart-dashboard.component';
import { AllAppointmentsDashboardComponent } from '../../component/all-appointments-dashboard/all-appointments-dashboard.component';
import { DoctorMonthlyDashboardComponent } from '../../component/doctor-monthly-dashboard/doctor-monthly-dashboard.component';
import { TotalAppointmentDashboardComponent } from '../../component/total-appointment-dashboard/total-appointment-dashboard.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, CommonModule,PatientChartDashboardComponent,AllAppointmentsDashboardComponent,DoctorMonthlyDashboardComponent,
    TotalAppointmentDashboardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public appointmentsChartOptions: any;
  public operationsChartOptions: any;
  public newPatientsChartOptions: any;
  public earningChartOptions: any;

  constructor() {
    this.appointmentsChartOptions = {
      series: [{ name: 'Appointments', data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62] }],
      chart: { type: 'area', height: 50, sparkline: { enabled: true } },
      stroke: { curve: 'smooth', width: 2 },
      xaxis: {
        categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"],
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
      colors: ['#6A0572'],
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => val.toString()
        }
      }
    };
    this.operationsChartOptions = {
      series: [{ name: 'Operations', data: [5, 6, 8, 5, 7, 5, 6, 4, 3, 4, 7, 4, 9, 6, 5, 6] }],
      chart: { type: 'area', height: 50, sparkline: { enabled: true } },
      stroke: { curve: 'smooth', width: 2 },
      colors: ['#FF6B6B'],
      xaxis: {
        categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"],
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
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => val.toString()
        }
      }
    };

    this.newPatientsChartOptions = {
      series: [{ name: 'New Patients', data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62] }],
      chart: { type: 'area', height: 50, sparkline: { enabled: true } },
      stroke: { curve: 'smooth', width: 2 },
      colors: ['#198754'],
      xaxis: {
        categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"],
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
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => val.toString()
        }
      }
    };

    this.earningChartOptions = {
      series: [{ name: 'Earning', data: [150, 161, 180, 150, 172, 152, 160, 141, 130, 145, 170, 140, 193, 163, 150, 162] }],
      chart: { type: 'area', height: 50, sparkline: { enabled: true } },
      stroke: { curve: 'smooth', width: 2 },
      colors: ['#D4AF37'],
      xaxis: {
        categories: ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"],
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
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => `₹${val}`
        }
      }
    };
  }
}
