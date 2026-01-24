import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LabReportsService } from '../../lab-reports.service';
import { MatDialog } from '@angular/material/dialog';
import { LabReportsDialogComponent } from '../../component/lab-reports-dialog/lab-reports-dialog.component';

@Component({
  selector: 'app-lab-reports',
  imports: [SharedModule, CommonModule],
  templateUrl: './lab-reports.component.html',
  styleUrl: './lab-reports.component.scss'
})
export class LabReportsComponent {
  LabReportsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private labReportsService: LabReportsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllLabReports()
    }, 1000);
  }

  GetAllLabReports() {
    this.labReportsService.GetAllLabReports().subscribe({
      next: (result: any) => {
        this.LabReportsList = result;
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
    return Math.ceil(this.LabReportsList.length / this.pageSize);
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
    this.paginatedList = this.LabReportsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddLabReportsDialog(obj: any) {
    const dialogRef = this.dialog.open(LabReportsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllLabReports()
    });
  }
}
