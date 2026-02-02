import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentOverviewService } from '../../department-overview.service';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentOverviewDialogComponent } from '../../component/department-overview-dialog/department-overview-dialog.component';

@Component({
  selector: 'app-department-overview',
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './department-overview.component.html',
  styleUrl: './department-overview.component.scss'
})
export class DepartmentOverviewComponent {
  DepartmentOverviewList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private departmentOverviewService: DepartmentOverviewService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllDepartmentOverview()
    }, 1000);
  }

  GetAllDepartmentOverview() {
    this.departmentOverviewService.GetAllDepartmentOverview().subscribe({
      next: (result: any) => {
        this.DepartmentOverviewList = result;
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
    return Math.ceil(this.DepartmentOverviewList.length / this.pageSize);
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
    this.paginatedList = this.DepartmentOverviewList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenDepartmentOverviewDialog(obj: any) {
    const dialogRef = this.dialog.open(DepartmentOverviewDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDepartmentOverview()
    });
  }

}
