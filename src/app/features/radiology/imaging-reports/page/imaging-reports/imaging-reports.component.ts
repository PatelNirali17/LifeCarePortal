import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ImagingReportsService } from '../../imaging-reports.service';
import { MatDialog } from '@angular/material/dialog';
import { ImagingReportsDialogComponent } from '../../component/imaging-reports-dialog/imaging-reports-dialog.component';

@Component({
  selector: 'app-imaging-reports',
  imports: [SharedModule, CommonModule],
  templateUrl: './imaging-reports.component.html',
  styleUrl: './imaging-reports.component.scss'
})
export class ImagingReportsComponent {
  ImagingReportsList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private imagingReportsService: ImagingReportsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllImagingReports()
    }, 1000);
  }

  GetAllImagingReports() {
    this.imagingReportsService.GetAllImagingReports().subscribe({
      next: (result: any) => {
        this.ImagingReportsList = result;
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
    return Math.ceil(this.ImagingReportsList.length / this.pageSize);
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
    this.paginatedList = this.ImagingReportsList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddImagingReportsDialog(obj: any) {
    const dialogRef = this.dialog.open(ImagingReportsDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllImagingReports()
    });
  }
}
