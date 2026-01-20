import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthRecordsService } from '../../birth-records.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBirthRecordsDialogComponent } from '../../component/add-birth-records-dialog/add-birth-records-dialog.component';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-birth-records',
  imports: [CommonModule, SharedModule],
  templateUrl: './birth-records.component.html',
  styleUrl: './birth-records.component.scss'
})
export class BirthRecordsComponent {
  BirthRecordsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private birthRecordsService: BirthRecordsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllBirthRecords()
    }, 1000);
  }

  GetAllBirthRecords() {
    this.birthRecordsService.GetAllBirthRecords().subscribe({
      next: (result: any) => {
        this.BirthRecordsList = result;
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
    return Math.ceil(this.BirthRecordsList.length / this.pageSize);
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
    this.paginatedList = this.BirthRecordsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBirthRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddBirthRecordsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllBirthRecords()
    });
  }

}
