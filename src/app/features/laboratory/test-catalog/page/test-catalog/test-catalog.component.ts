import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TestCatalogService } from '../../test-catalog.service';
import { MatDialog } from '@angular/material/dialog';
import { TestCatalogDialogComponent } from '../../component/test-catalog-dialog/test-catalog-dialog.component';

@Component({
  selector: 'app-test-catalog',
  imports: [SharedModule, CommonModule],
  templateUrl: './test-catalog.component.html',
  styleUrl: './test-catalog.component.scss'
})
export class TestCatalogComponent {
  TestCatalogList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private testCatalogService: TestCatalogService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllTestCatalog()
    }, 1000);
  }

  GetAllTestCatalog() {
    this.testCatalogService.GetAllTestCatalog().subscribe({
      next: (result: any) => {
        this.TestCatalogList = result;
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
    return Math.ceil(this.TestCatalogList.length / this.pageSize);
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
    this.paginatedList = this.TestCatalogList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddTestCatalogDialog(obj: any) {
    const dialogRef = this.dialog.open(TestCatalogDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTestCatalog()
    });
  }
}
