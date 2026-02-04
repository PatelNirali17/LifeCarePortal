import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HolidaysService } from '../../holidays.service';
import { HolidaysDialogComponent } from '../../component/holidays-dialog/holidays-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-holidays',
  imports: [SharedModule, CommonModule],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.scss',
})
export class HolidaysComponent implements OnInit {
  HolidaysList: any[] = [];
  selectedYear!: number;
  years: number[] = [];

  constructor(private holidaysService: HolidaysService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllHolidays()
    }, 1000);
  }

  ngOnInit(): void {
    this.selectedYear = new Date().getFullYear();
    this.generateYears();
  }

  generateYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 5; // 5 years in the past
    const endYear = currentYear + 5;   // 5 years in the future

    this.years = [];
    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
  }


  GetAllHolidays() {
    this.holidaysService.GetAllHolidays().subscribe({
      next: (result: any) => {
        this.HolidaysList = result;
      },
    })
  }


  getHolidayIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'national':
        return 'fa fa-flag';
      case 'awareness':
        return 'fa fa-globe';
      case 'religious':
        return 'fa fa-star';
      default:
        return 'fa fa-calendar';
    }
  }

  OpenAddHolidayDialog(obj: any) {
    const dialogRef = this.dialog.open(HolidaysDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllHolidays()
    });

  }

  deleteHoliday(id: any) {
    // For a better user experience, you can use a confirmation dialog
    // from a library like MatDialog instead of the browser's confirm.
  }
}
