import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ClaimStatusService } from '../../claim-status.service';
import { MatDialog } from '@angular/material/dialog';
import { ClaimStatusDialogComponent } from '../../component/claim-status-dialog/claim-status-dialog.component';
import { ClaimStatusDetailsDialogComponent } from '../../component/claim-status-details-dialog/claim-status-details-dialog.component';

@Component({
  selector: 'app-claim-status',
  imports: [SharedModule, CommonModule],
  templateUrl: './claim-status.component.html',
  styleUrl: './claim-status.component.scss'
})
export class ClaimStatusComponent {
  ClaimStatusList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private claimStatusService: ClaimStatusService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllClaimStatus()
    }, 1000);
  }

  GetAllClaimStatus() {
    this.claimStatusService.GetAllClaimStatus().subscribe({
      next: (result: any) => {
        this.ClaimStatusList = result;
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
    return Math.ceil(this.ClaimStatusList.length / this.pageSize);
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
    this.paginatedList = this.ClaimStatusList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddClaimStatusDialog(obj: any) {
    const dialogRef = this.dialog.open(ClaimStatusDialogComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllClaimStatus()
    });
  }

    OpenClaimStatusDetailsDialog(ClaimStatusDetails: any) {
      const dialogRef = this.dialog.open(ClaimStatusDetailsDialogComponent, {
        minWidth: '1000px',
        maxWidth: '1000px',
        data: ClaimStatusDetails,
        disableClose: true
      });
    }
}
