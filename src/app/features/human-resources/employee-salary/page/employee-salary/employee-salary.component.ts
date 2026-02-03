import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { EmployeeSalaryService } from '../../employee-salary.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeSalaryDialogComponent } from '../../component/employee-salary-dialog/employee-salary-dialog.component';

@Component({
  selector: 'app-employee-salary',
  imports: [SharedModule, CommonModule],
  templateUrl: './employee-salary.component.html',
  styleUrl: './employee-salary.component.scss'
})
export class EmployeeSalaryComponent {
  EmployeeSalaryList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private employeeSalaryService: EmployeeSalaryService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllEmployeeSalary()
    }, 1000);
  }

  GetAllEmployeeSalary() {
    this.employeeSalaryService.GetAllEmployeeSalary().subscribe({
      next: (result: any) => {
        this.EmployeeSalaryList = result;
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
    return Math.ceil(this.EmployeeSalaryList.length / this.pageSize);
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
    this.paginatedList = this.EmployeeSalaryList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddEmployeeSalaryDialog(obj: any) {
    const dialogRef = this.dialog.open(EmployeeSalaryDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllEmployeeSalary()
    });
  }

}
