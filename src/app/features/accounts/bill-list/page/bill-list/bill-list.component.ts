import { ChangeDetectorRef, Component } from '@angular/core';
import { BillListService } from '../../bill-list.service';
import { MatDialog } from '@angular/material/dialog';
import { BillListDialogComponent } from '../../component/bill-list-dialog/bill-list-dialog.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bill-list',
  imports: [SharedModule,CommonModule],
  templateUrl: './bill-list.component.html',
  styleUrl: './bill-list.component.scss'
})
export class BillListComponent {
  BillList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private billListService: BillListService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllBillList();
    }, 500);
  }

  GetAllBillList() {
    this.billListService.GetAllBillList().subscribe({
      next: (result: any) => {
        this.BillList = result;
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
    return Math.ceil(this.BillList.length / this.pageSize);
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
    this.paginatedList = this.BillList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBillListDialog(obj: any) {
    const dialogRef = this.dialog.open(BillListDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllBillList();
      }
    });
  }

}
