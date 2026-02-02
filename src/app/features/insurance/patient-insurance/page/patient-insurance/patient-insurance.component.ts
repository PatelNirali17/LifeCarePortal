import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientInsuranceService } from '../../patient-insurance.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientInsuranceDialogComponent } from '../../component/patient-insurance-dialog/patient-insurance-dialog.component';
import { PatientInsuranceDetailsDialogComponent } from '../../component/patient-insurance-details-dialog/patient-insurance-details-dialog.component';

@Component({
  selector: 'app-patient-insurance',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-insurance.component.html',
  styleUrl: './patient-insurance.component.scss'
})
export class PatientInsuranceComponent {
  PatientInsuranceList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private patientInsuranceService: PatientInsuranceService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPatientInsurance()
    }, 1000);
  }

  GetAllPatientInsurance() {
    this.patientInsuranceService.GetAllPatientInsurance().subscribe({
      next: (result: any) => {
        this.PatientInsuranceList = result;
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
    return Math.ceil(this.PatientInsuranceList.length / this.pageSize);
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
    this.paginatedList = this.PatientInsuranceList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPatientInsuranceDialog(obj: any) {
    const dialogRef = this.dialog.open(PatientInsuranceDialogComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatientInsurance()
    });
  }

  OpenPatientInsuranceDetailsDialog(PatientInsuranceDetails: any) {
    const dialogRef = this.dialog.open(PatientInsuranceDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: PatientInsuranceDetails,
      disableClose: true
    });
  }
}
