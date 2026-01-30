import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientDocumentsService } from '../../patient-documents.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientDocumentsDialogComponent } from '../../component/patient-documents-dialog/patient-documents-dialog.component';

@Component({
  selector: 'app-patient-documents',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-documents.component.html',
  styleUrl: './patient-documents.component.scss'
})
export class PatientDocumentsComponent {
  PatientDocumentsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private patientDocumentsService: PatientDocumentsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPatientDocuments()
    }, 1000);
  }

  GetAllPatientDocuments() {
    this.patientDocumentsService.GetAllPatientDocuments().subscribe({
      next: (result: any) => {
        this.PatientDocumentsList = result;
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
    return Math.ceil(this.PatientDocumentsList.length / this.pageSize);
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
    this.paginatedList = this.PatientDocumentsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPatientDocumentsDialog(obj: any) {
    const dialogRef = this.dialog.open(PatientDocumentsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatientDocuments()
    });
  }
}
