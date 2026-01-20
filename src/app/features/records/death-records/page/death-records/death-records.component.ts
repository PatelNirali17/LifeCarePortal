import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { DeathRecordsService } from '../../death-records.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../../../../shared/shared.module';
import { AddDeathRecordsDialogComponent } from '../../component/add-death-records-dialog/add-death-records-dialog.component';

@Component({
  selector: 'app-death-records',
  imports: [CommonModule, SharedModule],
  templateUrl: './death-records.component.html',
  styleUrl: './death-records.component.scss'
})
export class DeathRecordsComponent implements OnInit {
  DeathRecordsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;


  constructor(private deathRecordsService: DeathRecordsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllDeathRecords();
    }, 500);
  }

  GetAllDeathRecords() {
    this.deathRecordsService.GetAllDeathRecords().subscribe({
      next: (result: any) => {
        this.DeathRecordsList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.DeathRecordsList.length / this.pageSize);
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
    this.paginatedList = this.DeathRecordsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddDeathRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddDeathRecordsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllDeathRecords();
      }
    });
  }

}
