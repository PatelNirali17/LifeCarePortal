import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TestOrderingService } from '../../test-ordering.service';
import { MatDialog } from '@angular/material/dialog';
import { TestOrderingDialogComponent } from '../../component/test-ordering-dialog/test-ordering-dialog.component';

@Component({
  selector: 'app-test-ordering',
  imports: [SharedModule, CommonModule],
  templateUrl: './test-ordering.component.html',
  styleUrl: './test-ordering.component.scss'
})
export class TestOrderingComponent {
  TestOrderingList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private testOrderingService: TestOrderingService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllTestOrdering()
    }, 1000);
  }

  GetAllTestOrdering() {
    this.testOrderingService.GetAllTestOrdering().subscribe({
      next: (result: any) => {
        this.TestOrderingList = result;
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
    return Math.ceil(this.TestOrderingList.length / this.pageSize);
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
    this.paginatedList = this.TestOrderingList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddTestOrderingDialog(obj: any) {
    const dialogRef = this.dialog.open(TestOrderingDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTestOrdering()
    });
  }
}
