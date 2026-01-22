import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { BloodIssuedService } from '../../blood-issued.service';
import { MatDialog } from '@angular/material/dialog';
import { BloodIssuedDialogComponent } from '../../component/blood-issued-dialog/blood-issued-dialog.component';
import { BloodIssuedDetailsDialogComponent } from '../../component/blood-issued-details-dialog/blood-issued-details-dialog.component';

@Component({
  selector: 'app-blood-issued',
  imports: [CommonModule, SharedModule],
  templateUrl: './blood-issued.component.html',
  styleUrl: './blood-issued.component.scss'
})
export class BloodIssuedComponent {
  BloodIssuedList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private bloodIssuedService: BloodIssuedService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllBloodIssued();
    }, 500);
  }

  GetAllBloodIssued() {
    this.bloodIssuedService.GetAllBloodIssued().subscribe({
      next: (result: any) => {
        this.BloodIssuedList = result;
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
    return Math.ceil(this.BloodIssuedList.length / this.pageSize);
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
    this.paginatedList = this.BloodIssuedList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBloodIssuedDialog(obj: any) {
    const dialogRef = this.dialog.open(BloodIssuedDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllBloodIssued();
      }
    });
  }

  OpenBloodIssuedDetailsDialog(BoolIssuedDetails: any) {
    const dialogRef = this.dialog.open(BloodIssuedDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: BoolIssuedDetails,
      disableClose: true
    });
  }
}
