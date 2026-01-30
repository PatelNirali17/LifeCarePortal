import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ClinicalNotesService } from '../../clinical-notes.service';
import { MatDialog } from '@angular/material/dialog';
import { ClinicalNotesDialogComponent } from '../../component/clinical-notes-dialog/clinical-notes-dialog.component';

@Component({
  selector: 'app-clinical-notes',
  imports: [SharedModule, CommonModule],
  templateUrl: './clinical-notes.component.html',
  styleUrl: './clinical-notes.component.scss'
})
export class ClinicalNotesComponent {
  ClinicalNotesList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private clinicalNotesService: ClinicalNotesService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllClinicalNotes()
    }, 1000);
  }

  GetAllClinicalNotes() {
    this.clinicalNotesService.GetAllClinicalNotes().subscribe({
      next: (result: any) => {
        this.ClinicalNotesList = result;
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
    return Math.ceil(this.ClinicalNotesList.length / this.pageSize);
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
    this.paginatedList = this.ClinicalNotesList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddClinicalNotesDialog(obj: any) {
    const dialogRef = this.dialog.open(ClinicalNotesDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllClinicalNotes()
    });
  }
}
