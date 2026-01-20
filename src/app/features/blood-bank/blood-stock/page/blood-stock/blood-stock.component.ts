import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { BloodStockService } from '../../blood-stock.service';
import { MatDialog } from '@angular/material/dialog';
import { BloodStockDialogComponent } from '../../component/blood-stock-dialog/blood-stock-dialog.component';
import { BloodStockDetailsDialogComponent } from '../../component/blood-stock-details-dialog/blood-stock-details-dialog.component';

@Component({
  selector: 'app-blood-stock',
  imports: [CommonModule, SharedModule],
  templateUrl: './blood-stock.component.html',
  styleUrl: './blood-stock.component.scss'
})
export class BloodStockComponent {
  BloodStockList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private bloodStockService: BloodStockService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllBloodStock();
    }, 500);
  }

  GetAllBloodStock() {
    this.bloodStockService.GetAllBloodStock().subscribe({
      next: (result: any) => {
        this.BloodStockList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.BloodStockList.length / this.pageSize);
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
    this.paginatedList = this.BloodStockList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBloodStockDialog(obj: any) {
    const dialogRef = this.dialog.open(BloodStockDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllBloodStock();
      }
    });
  }

  OpenBloodStockDetailsDialog(BoolStockDetails: any) {
    const dialogRef = this.dialog.open(BloodStockDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: BoolStockDetails,
      disableClose: true
    });
  }
}
