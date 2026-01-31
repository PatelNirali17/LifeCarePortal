import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SurgeryRecordsService } from '../../surgery-records.service';
import { MatDialog } from '@angular/material/dialog';
import { SurgeryRecordsDialogComponent } from '../../component/surgery-records-dialog/surgery-records-dialog.component';

@Component({
  selector: 'app-surgery-records',
  imports: [SharedModule, CommonModule],
  templateUrl: './surgery-records.component.html',
  styleUrl: './surgery-records.component.scss'
})
export class SurgeryRecordsComponent {
  SurgeryRecordsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private surgeryRecordsService: SurgeryRecordsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllSurgeryRecords()
    }, 1000);
  }

  GetAllSurgeryRecords() {
    this.surgeryRecordsService.GetAllSurgeryRecords().subscribe({
      next: (result: any) => {
        this.SurgeryRecordsList = result;
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
    return Math.ceil(this.SurgeryRecordsList.length / this.pageSize);
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
    this.paginatedList = this.SurgeryRecordsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddSurgeryRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(SurgeryRecordsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllSurgeryRecords()
    });
  }
}
