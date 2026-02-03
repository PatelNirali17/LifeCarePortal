import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

export interface Attendance {
  employeeName: string;
  firstIn: string;
  break: string;
  lastOut: string;
  totalHours: string;
  status: 'present' | 'absent';
  shift: 'Night Shift' | 'Day Shift';
}

@Component({
  selector: 'app-todays-attendance',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './todays-attendance.component.html',
  styleUrl: './todays-attendance.component.scss'
})
export class TodaysAttendanceComponent implements OnInit {
  attendanceData: Attendance[] = [
    { employeeName: 'John Deo', firstIn: '10:30', break: '01:15', lastOut: '19:37', totalHours: '08:02', status: 'present', shift: 'Night Shift' },
    { employeeName: 'Sarah Smith', firstIn: '10:32', break: '01:00', lastOut: '19:30', totalHours: '08:10', status: 'absent', shift: 'Day Shift' },
    { employeeName: 'Edna Gilbert', firstIn: '10:42', break: '01:10', lastOut: '19:32', totalHours: '08:08', status: 'absent', shift: 'Day Shift' },
    { employeeName: 'Shelia Osterberg', firstIn: '10:38', break: '01:07', lastOut: '19:40', totalHours: '08:00', status: 'present', shift: 'Night Shift' },
    { employeeName: 'Barbara Garland', firstIn: '10:33', break: '01:15', lastOut: '19:30', totalHours: '08:01', status: 'present', shift: 'Night Shift' },
    { employeeName: 'Sarah Smith', firstIn: '10:30', break: '01:10', lastOut: '19:37', totalHours: '08:10', status: 'absent', shift: 'Day Shift' },
    { employeeName: 'Marie Brodsky', firstIn: '10:32', break: '01:05', lastOut: '19:40', totalHours: '08:00', status: 'absent', shift: 'Day Shift' },
    { employeeName: 'Kara Thompson', firstIn: '10:40', break: '01:07', lastOut: '19:30', totalHours: '08:12', status: 'present', shift: 'Day Shift' },
    { employeeName: 'Joseph Nye', firstIn: '10:28', break: '01:00', lastOut: '19:32', totalHours: '08:02', status: 'present', shift: 'Night Shift' },
    { employeeName: 'Ricardo Wendler', firstIn: '10:38', break: '01:15', lastOut: '19:37', totalHours: '08:00', status: 'present', shift: 'Night Shift' },
    { employeeName: 'Brian Shelley', firstIn: '10:30', break: '01:07', lastOut: '19:38', totalHours: '08:10', status: 'absent', shift: 'Day Shift' },
    { employeeName: 'Theresa Bullock', firstIn: '10:40', break: '01:00', lastOut: '19:30', totalHours: '08:08', status: 'present', shift: 'Day Shift' },
    { employeeName: 'Jeannie Elder', firstIn: '10:42', break: '01:05', lastOut: '19:38', totalHours: '08:12', status: 'present', shift: 'Day Shift' }
  ];

  currentPage = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status: string) {
    return 'status-' + status;
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.attendanceData.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.attendanceData.length / this.pageSize);
  }

  get pagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get showingRangeEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.attendanceData.length);
  }
}
