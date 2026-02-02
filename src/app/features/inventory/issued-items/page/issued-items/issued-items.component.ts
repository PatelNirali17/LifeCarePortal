import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { IssuedItemsService } from '../../issued-items.service';
import { MatDialog } from '@angular/material/dialog';
import { IssuedItemsDialogComponent } from '../../component/issued-items-dialog/issued-items-dialog.component';

@Component({
  selector: 'app-issued-items',
  imports: [SharedModule, CommonModule],
  templateUrl: './issued-items.component.html',
  styleUrl: './issued-items.component.scss'
})
export class IssuedItemsComponent {
  IssuedItemsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private issuedItemsService: IssuedItemsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllIssuedItems()
    }, 1000);
  }

  GetAllIssuedItems() {
    this.issuedItemsService.GetAllIssuedItems().subscribe({
      next: (result: any) => {
        this.IssuedItemsList = result;
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
    return Math.ceil(this.IssuedItemsList.length / this.pageSize);
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
    this.paginatedList = this.IssuedItemsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddIssuedItemsDialog(obj: any) {
    const dialogRef = this.dialog.open(IssuedItemsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllIssuedItems()
    });
  }

}
