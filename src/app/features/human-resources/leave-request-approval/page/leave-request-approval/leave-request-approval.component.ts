import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaveRequestApprovalService } from '../../leave-request-approval.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-request-approval',
  imports: [SharedModule, CommonModule],
  templateUrl: './leave-request-approval.component.html',
  styleUrl: './leave-request-approval.component.scss'
})
export class LeaveRequestApprovalComponent {
  LeaveRequestApprovalList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private leaveRequestApprovalService: LeaveRequestApprovalService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllLeaveRequestApproval()
    }, 1000);
  }

  GetAllLeaveRequestApproval() {
    this.leaveRequestApprovalService.GetAllLeaveRequestsApproval().subscribe({
      next: (result: any) => {
        this.LeaveRequestApprovalList = result?.filter((s: any) => s.status == "Pending");
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
    return Math.ceil(this.LeaveRequestApprovalList.length / this.pageSize);
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
    this.paginatedList = this.LeaveRequestApprovalList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }
}
