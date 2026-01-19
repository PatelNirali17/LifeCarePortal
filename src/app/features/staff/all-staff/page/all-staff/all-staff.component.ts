import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AllStaffService } from '../../all-staff.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddStaffDialogComponent } from '../../component/add-staff-dialog/add-staff-dialog.component';
import { StaffDetailsDialogComponent } from '../../component/staff-details-dialog/staff-details-dialog.component';

@Component({
  selector: 'app-all-staff',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-staff.component.html',
  styleUrl: './all-staff.component.scss'
})
export class AllStaffComponent {
  StaffList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private allStaffService: AllStaffService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllStaff()
    }, 1000);
  }

  GetAllStaff() {
    this.allStaffService.GetAllStaff().subscribe({
      next: (result: any) => {
        this.StaffList = result;
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
    return Math.ceil(this.StaffList.length / this.pageSize);
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
    this.paginatedList = this.StaffList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAllStaffDialog(obj: any) {
    const dialogRef = this.dialog.open(AddStaffDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllStaff()
    });
  }

  OpenStaffDetailsDialog(obj: any) {
    const dialogRef = this.dialog.open(StaffDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
