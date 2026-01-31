import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PreOpAssessmentService } from '../../pre-op-assessment.service';
import { MatDialog } from '@angular/material/dialog';
import { PreOpAssessmentDialogComponent } from '../../component/pre-op-assessment-dialog/pre-op-assessment-dialog.component';

@Component({
  selector: 'app-pre-op-assessment',
  imports: [SharedModule, CommonModule],
  templateUrl: './pre-op-assessment.component.html',
  styleUrl: './pre-op-assessment.component.scss'
})
export class PreOpAssessmentComponent {
  PreOpAssessmentList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private preOpAssessmentService: PreOpAssessmentService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPreOpAssessment()
    }, 1000);
  }

  GetAllPreOpAssessment() {
    this.preOpAssessmentService.GetAllPreOpAssessment().subscribe({
      next: (result: any) => {
        this.PreOpAssessmentList = result;
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
    return Math.ceil(this.PreOpAssessmentList.length / this.pageSize);
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
    this.paginatedList = this.PreOpAssessmentList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPreOpAssessmentDialog(obj: any) {
    const dialogRef = this.dialog.open(PreOpAssessmentDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPreOpAssessment()
    });
  }
}
