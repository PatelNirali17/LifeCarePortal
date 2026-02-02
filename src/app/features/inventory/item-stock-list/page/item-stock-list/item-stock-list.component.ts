import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ItemStockListService } from '../../item-stock-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemStockListDialogComponent } from '../../component/item-stock-list-dialog/item-stock-list-dialog.component';

@Component({
  selector: 'app-item-stock-list',
  imports: [SharedModule, CommonModule],
  templateUrl: './item-stock-list.component.html',
  styleUrl: './item-stock-list.component.scss'
})
export class ItemStockListComponent {
  ItemStockList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private itemStockListService: ItemStockListService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllItemStockList()
    }, 1000);
  }

  GetAllItemStockList() {
    this.itemStockListService.GetAllItemStockList().subscribe({
      next: (result: any) => {
        this.ItemStockList = result;
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
    return Math.ceil(this.ItemStockList.length / this.pageSize);
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
    this.paginatedList = this.ItemStockList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddItemStockListDialog(obj: any) {
    const dialogRef = this.dialog.open(ItemStockListDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllItemStockList()
    });
  }

}
