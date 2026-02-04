import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaveRequestsService } from '../../leave-requests.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveRequestsDialogComponent } from '../../component/leave-requests-dialog/leave-requests-dialog.component';

@Component({
  selector: 'app-leave-requests',
  imports: [SharedModule, CommonModule],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.scss'
})
export class LeaveRequestsComponent {
  LeaveRequestsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private leaveRequestsService: LeaveRequestsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllLeaveRequests()
    }, 1000);
  }

  GetAllLeaveRequests() {
    this.leaveRequestsService.GetAllLeaveRequests().subscribe({
      next: (result: any) => {
        this.LeaveRequestsList = result;
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
    return Math.ceil(this.LeaveRequestsList.length / this.pageSize);
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
    this.paginatedList = this.LeaveRequestsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddLeaveRequestsDialog(obj: any) {
    const dialogRef = this.dialog.open(LeaveRequestsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllLeaveRequests()
    });
  }

}
