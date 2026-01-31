import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ScansTrackingService } from '../../scans-tracking.service';
import { MatDialog } from '@angular/material/dialog';
import { ScansTrackingDialogComponent } from '../../component/scans-tracking-dialog/scans-tracking-dialog.component';

@Component({
  selector: 'app-scans-tracking',
  imports: [SharedModule, CommonModule],
  templateUrl: './scans-tracking.component.html',
  styleUrl: './scans-tracking.component.scss'
})
export class ScansTrackingComponent {
  ScansTrackingList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private scansTrackingService: ScansTrackingService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllScansTracking()
    }, 1000);
  }

  GetAllScansTracking() {
    this.scansTrackingService.GetAllScansTracking().subscribe({
      next: (result: any) => {
        this.ScansTrackingList = result;
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
    return Math.ceil(this.ScansTrackingList.length / this.pageSize);
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
    this.paginatedList = this.ScansTrackingList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddScansTrackingDialog(obj: any) {
    const dialogRef = this.dialog.open(ScansTrackingDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllScansTracking()
    });
  }
}
