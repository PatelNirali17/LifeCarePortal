import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllPatientsService } from '../../all-patients.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientDialogComponent } from '../../component/add-patient-dialog/add-patient-dialog.component';
import { PatientDetailsDialogComponent } from '../../component/patient-details-dialog/patient-details-dialog.component';

@Component({
  selector: 'app-all-patients',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-patients.component.html',
  styleUrl: './all-patients.component.scss'
})
export class AllPatientsComponent {
  PatientList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private allPatientsService: AllPatientsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPatients()
    }, 1000);
  }

  GetAllPatients() {
    this.allPatientsService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result;
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
    return Math.ceil(this.PatientList.length / this.pageSize);
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
    this.paginatedList = this.PatientList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPatientsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatients()
    });
  }

  OpenPatientDetailsDialog(PatientDetails: any) {
    const dialogRef = this.dialog.open(PatientDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: PatientDetails,
      disableClose: true
    });
  }
}
