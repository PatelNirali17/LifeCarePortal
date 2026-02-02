import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-attendance-sheet',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './attendance-sheet.component.html',
  styleUrl: './attendance-sheet.component.scss'
})
export class AttendanceSheetComponent implements OnInit {
  selectedMonth: Date = new Date();
  daysInMonth: number[] = [];
  attendanceData: any[] = [];

  ngOnInit() {
    this.generateMockData(this.selectedMonth);
  }

  monthSelectedHandler(chosenMonth: Date, datepicker: MatDatepicker<Date>) {
    this.selectedMonth = chosenMonth;
    datepicker.close();
    this.generateMockData(this.selectedMonth);
  }

  getStatusClass(status: string): string {
    if (!status) return '';
    return 'status-' + status;
  }

  getStatusTooltip(status: string): string {
    switch (status) {
      case 'P': return 'Present';
      case 'A': return 'Absent';
      case 'L': return 'Leave';
      case 'H': return 'Holiday';
      case 'WO': return 'Week Off';
      default: return 'N/A';
    }
  }

  // Temporary function to generate dummy data
  generateMockData(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysCount }, (_, i) => i + 1);

    const employees = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis', 'Michael Brown', 'Sarah Wilson'];
    const statuses = ['P', 'P', 'P', 'P', 'P', 'A', 'L', 'WO', 'H'];

    this.attendanceData = employees.map(name => {
      const attendance: any = {};
      let present = 0, absent = 0, leave = 0;

      this.daysInMonth.forEach(day => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        attendance[day] = status;
        if (status === 'P') present++;
        if (status === 'A') absent++;
        if (status === 'L') leave++;
      });

      return {
        employeeName: name,
        attendance,
        summary: { totalPresent: present, totalAbsent: absent, totalLeave: leave }
      };
    });
  }
}
