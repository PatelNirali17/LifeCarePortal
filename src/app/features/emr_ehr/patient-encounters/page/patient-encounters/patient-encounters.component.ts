import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientEncountersService } from '../../patient-encounters.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientEncountersDialogComponent } from '../../component/patient-encounters-dialog/patient-encounters-dialog.component';

@Component({
  selector: 'app-patient-encounters',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-encounters.component.html',
  styleUrl: './patient-encounters.component.scss'
})
export class PatientEncountersComponent {
  PatientEncountersList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private patientEncountersService: PatientEncountersService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPatientEncounters()
    }, 1000);
  }

  GetAllPatientEncounters() {
    this.patientEncountersService.GetAllPatientEncounters().subscribe({
      next: (result: any) => {
        this.PatientEncountersList = result;
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
    return Math.ceil(this.PatientEncountersList.length / this.pageSize);
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
    this.paginatedList = this.PatientEncountersList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPatientEncountersDialog(obj: any) {
    const dialogRef = this.dialog.open(PatientEncountersDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatientEncounters()
    });
  }
}
