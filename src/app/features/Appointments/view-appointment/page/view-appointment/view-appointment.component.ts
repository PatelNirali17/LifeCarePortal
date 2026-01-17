import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ViewAppointmentService } from '../../view-appointment.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewAppointmentDialogComponent } from '../../component/view-appointment-dialog/view-appointment-dialog.component';
import { AppointmentDetailsDialogComponent } from '../../component/appointment-details-dialog/appointment-details-dialog.component';

@Component({
  selector: 'app-view-appointment',
  imports: [SharedModule, CommonModule],
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.scss'
})
export class ViewAppointmentComponent {
  AppointmentList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private viewAppointmentService: ViewAppointmentService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllAppointment()
    }, 1000);
  }

  GetAllAppointment() {
    this.viewAppointmentService.GetAllAppointment().subscribe({
      next: (result: any) => {
        this.AppointmentList = result;
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
    return Math.ceil(this.AppointmentList.length / this.pageSize);
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
    this.paginatedList = this.AppointmentList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenViewAppointmentDailog(obj: any) {
    const dialogRef = this.dialog.open(ViewAppointmentDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllAppointment()
    });
  }

  OpenAppointmentDetailsDialog(AppointmentDetails: any) {
    const dialogRef = this.dialog.open(AppointmentDetailsDialogComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      data: AppointmentDetails,
      disableClose: true
    });
  }

}
