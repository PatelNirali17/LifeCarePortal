import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AssignDepartmentService } from '../../assign-department.service';
import { MatDialog } from '@angular/material/dialog';
import { AssignDepartmentDialogComponent } from '../../component/assign-department-dialog/assign-department-dialog.component';

@Component({
  selector: 'app-assign-department',
  imports: [SharedModule, CommonModule],
  templateUrl: './assign-department.component.html',
  styleUrl: './assign-department.component.scss'
})
export class AssignDepartmentComponent {
  AssignDepartmentList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private assignDepartmentService: AssignDepartmentService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllAssignDepartment()
    }, 1000);
  }

  GetAllAssignDepartment() {
    this.assignDepartmentService.GetAllAssignDepartment().subscribe({
      next: (result: any) => {
        this.AssignDepartmentList = result;
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
    return Math.ceil(this.AssignDepartmentList.length / this.pageSize);
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
    this.paginatedList = this.AssignDepartmentList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAssignDepartmentDialog(obj: any) {
    const dialogRef = this.dialog.open(AssignDepartmentDialogComponent, {
       minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllAssignDepartment()
    });
  }
}
