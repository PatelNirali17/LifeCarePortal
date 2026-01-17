import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ShiftManagementService } from '../../shift-management.service';
import { MatDialog } from '@angular/material/dialog';
import { ShiftManagementDialogComponent } from '../../component/shift-management-dialog/shift-management-dialog.component';
import { ShiftManagementDetailsDialogComponent } from '../../component/shift-management-details-dialog/shift-management-details-dialog.component';

@Component({
  selector: 'app-shift-management',
  imports: [SharedModule, CommonModule],
  templateUrl: './shift-management.component.html',
  styleUrl: './shift-management.component.scss'
})
export class ShiftManagementComponent {
  ShiftManagementList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private shiftManagementService: ShiftManagementService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllShiftManagement()
    }, 1000);
  }

  GetAllShiftManagement() {
    this.shiftManagementService.GetAllShiftManagement().subscribe({
      next: (result: any) => {
        this.ShiftManagementList = result;
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
    return Math.ceil(this.ShiftManagementList.length / this.pageSize);
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
    this.paginatedList = this.ShiftManagementList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenShiftManagementDialog(obj: any) {
    const dialogRef = this.dialog.open(ShiftManagementDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllShiftManagement()
    });
  }

  OpenShiftManagementDetails(obj: any) {
    const dialogRef = this.dialog.open(ShiftManagementDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
