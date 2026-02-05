import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BookAppointmentsService } from '../../book-appointments.service';
import { MatDialog } from '@angular/material/dialog';
import { BookAppoinmentDialogComponent } from '../../component/book-appoinment-dialog/book-appoinment-dialog.component';

@Component({
  selector: 'app-book-BookAppointmentss',
  imports: [SharedModule, CommonModule],
  templateUrl: './book-appointments.component.html',
  styleUrl: './book-appointments.component.scss'
})
export class BookAppointmentsComponent {
  BookAppointmentsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private bookAppointmentsService: BookAppointmentsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllBookAppointments()
    }, 1000);
  }

  GetAllBookAppointments() {
    this.bookAppointmentsService.GetAllBookAppointment().subscribe({
      next: (result: any) => {
        this.BookAppointmentsList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      },
    })
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.BookAppointmentsList.length / this.pageSize);
  }

  get currentPage(): number {
    return this.pageIndex + 1;
  }

  get pagesArray(): any[] {
    return Array(this.totalPages).fill(0);
  }

  updatePaginatedList(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedList = this.BookAppointmentsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenBookAppointmentsDailog(obj: any) {
    const dialogRef = this.dialog.open(BookAppoinmentDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllBookAppointments()
    });
  }

}
