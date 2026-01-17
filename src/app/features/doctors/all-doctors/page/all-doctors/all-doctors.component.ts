import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllDoctorsService } from '../../all-doctors.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDoctorDialogComponent } from '../../component/add-doctor-dialog/add-doctor-dialog.component';
import { DoctorDetailsDialogComponent } from '../../component/doctor-details-dialog/doctor-details-dialog.component';

@Component({
  selector: 'app-all-doctors',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.scss'
})
export class AllDoctorsComponent {
  DoctorList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private allDoctorsService: AllDoctorsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllDocotors()
    }, 1000);
  }

  GetAllDocotors() {
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result;
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
    return Math.ceil(this.DoctorList.length / this.pageSize);
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
    this.paginatedList = this.DoctorList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddDoctorDialog(obj: any) {
    const dialogRef = this.dialog.open(AddDoctorDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDocotors()
    });
  }

  OpenDoctorDetailsDialog(obj: any) {
    const dialogRef = this.dialog.open(DoctorDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
