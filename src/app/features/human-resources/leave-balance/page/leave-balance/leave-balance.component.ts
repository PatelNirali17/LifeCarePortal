import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaveBalanceService } from '../../leave-balance.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveBalanceDialogComponent } from '../../component/leave-balance-dialog/leave-balance-dialog.component';

@Component({
  selector: 'app-leave-balance',
  imports: [SharedModule, CommonModule],
  templateUrl: './leave-balance.component.html',
  styleUrl: './leave-balance.component.scss'
})
export class LeaveBalanceComponent {
  LeaveBalanceList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 8;
  pageIndex = 0;

  constructor(private leaveBalanceService: LeaveBalanceService, private dialog: MatDialog,private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllLeaveBalance()
    }, 1000);
  }

  GetAllLeaveBalance() {
    this.leaveBalanceService.GetAllLeaveBalance().subscribe({
      next: (result: any) => {
        this.LeaveBalanceList = result;
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
    return Math.ceil(this.LeaveBalanceList.length / this.pageSize);
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
    this.paginatedList = this.LeaveBalanceList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

    OpenAddLeaveBalanceDialog(obj: any) {
      const dialogRef = this.dialog.open(LeaveBalanceDialogComponent, {
        minWidth: '600px',
        maxWidth: '600px',
        data: obj ? obj : null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.GetAllLeaveBalance()
      });
    }
  

}
