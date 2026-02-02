import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentListService } from '../../department-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DepartmentListDialogComponent } from '../../component/department-list-dialog/department-list-dialog.component';

@Component({
  selector: 'app-department-list',
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.scss'
})
export class DepartmentListComponent {
  DepartmentList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private departmentListService: DepartmentListService, private dialog: MatDialog, private toast: ToastrService, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllDepartment()
    }, 1000);
  }

  GetAllDepartment() {
    this.departmentListService.GetAllDepartmentList().subscribe({
      next: (result: any) => {
        this.DepartmentList = result;
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
    return Math.ceil(this.DepartmentList.length / this.pageSize);
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
    this.paginatedList = this.DepartmentList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenDepartmentDialog(obj: any) {
    const dialogRef = this.dialog.open(DepartmentListDialogComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDepartment()
    });
  }

}
