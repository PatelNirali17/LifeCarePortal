import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MedicationHistoryService } from '../../medication-history.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicationHistoryDialogComponent } from '../../component/medication-history-dialog/medication-history-dialog.component';

@Component({
  selector: 'app-medication-history',
  imports: [SharedModule, CommonModule],
  templateUrl: './medication-history.component.html',
  styleUrl: './medication-history.component.scss'
})
export class MedicationHistoryComponent {
  MedicationHistoryList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private medicationHistoryService: MedicationHistoryService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllMedicationHistory()
    }, 1000);
  }

  GetAllMedicationHistory() {
    this.medicationHistoryService.GetAllMedicationHistory().subscribe({
      next: (result: any) => {
        this.MedicationHistoryList = result;
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
    return Math.ceil(this.MedicationHistoryList.length / this.pageSize);
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
    this.paginatedList = this.MedicationHistoryList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddMedicationHistoryDialog(obj: any) {
    const dialogRef = this.dialog.open(MedicationHistoryDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllMedicationHistory()
    });
  }
}
