import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { OtInventoryService } from '../../ot-inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { OtInventoryDialogComponent } from '../../component/ot-inventory-dialog/ot-inventory-dialog.component';

@Component({
  selector: 'app-ot-inventory',
  imports: [SharedModule, CommonModule],
  templateUrl: './ot-inventory.component.html',
  styleUrl: './ot-inventory.component.scss'
})
export class OtInventoryComponent {
  OtInventoryList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private otInventoryService: OtInventoryService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllOtInventory()
    }, 1000);
  }

  GetAllOtInventory() {
    this.otInventoryService.GetAllOtInventory().subscribe({
      next: (result: any) => {
        this.OtInventoryList = result;
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
    return Math.ceil(this.OtInventoryList.length / this.pageSize);
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
    this.paginatedList = this.OtInventoryList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddOtInventoryDialog(obj: any) {
    const dialogRef = this.dialog.open(OtInventoryDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllOtInventory()
    });
  }
}
