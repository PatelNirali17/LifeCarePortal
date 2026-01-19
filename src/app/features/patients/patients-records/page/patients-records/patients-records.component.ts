import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientsRecordsService } from '../../patients-records.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientsRecordsDialogComponent } from '../../component/add-patients-records-dialog/add-patients-records-dialog.component';
import { PatientsRecordsDetailsDialogComponent } from '../../component/patients-records-details-dialog/patients-records-details-dialog.component';

@Component({
  selector: 'app-patients-records',
  imports: [SharedModule, CommonModule],
  templateUrl: './patients-records.component.html',
  styleUrl: './patients-records.component.scss'
})
export class PatientsRecordsComponent {
  PatientRecordsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private patientsRecordsService: PatientsRecordsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPatientsRecords()
    }, 1000);
  }

  GetAllPatientsRecords() {
    this.patientsRecordsService.GetAllPatientsRecords().subscribe({
      next: (result: any) => {
        this.PatientRecordsList = result;
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
    return Math.ceil(this.PatientRecordsList.length / this.pageSize);
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
    this.paginatedList = this.PatientRecordsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPatientsRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddPatientsRecordsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatientsRecords()
    });
  }

  OpenPatientRecordsDetailsDialog(PatientDetails: any) {
    const dialogRef = this.dialog.open(PatientsRecordsDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: PatientDetails,
      disableClose: true
    });
  }
}
