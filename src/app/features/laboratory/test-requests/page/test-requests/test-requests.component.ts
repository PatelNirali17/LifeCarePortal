import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TestRequestsService } from '../../test-requests.service';
import { MatDialog } from '@angular/material/dialog';
import { TestRequestsDialogComponent } from '../../component/test-requests-dialog/test-requests-dialog.component';

@Component({
  selector: 'app-test-requests',
  imports: [SharedModule, CommonModule],
  templateUrl: './test-requests.component.html',
  styleUrl: './test-requests.component.scss'
})
export class TestRequestsComponent {
  TestRequestsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private testRequestsService: TestRequestsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllTestRequests()
    }, 1000);
  }

  GetAllTestRequests() {
    this.testRequestsService.GetAllTestRequests().subscribe({
      next: (result: any) => {
        this.TestRequestsList = result;
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
    return Math.ceil(this.TestRequestsList.length / this.pageSize);
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
    this.paginatedList = this.TestRequestsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddTestRequestsDialog(obj: any) {
    const dialogRef = this.dialog.open(TestRequestsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTestRequests()
    });
  }
}
