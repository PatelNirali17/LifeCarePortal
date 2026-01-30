import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TreatmentPlansService } from '../../treatment-plans.service';
import { MatDialog } from '@angular/material/dialog';
import { TreatmentPlansDialogComponent } from '../../component/treatment-plans-dialog/treatment-plans-dialog.component';

@Component({
  selector: 'app-treatment-plans',
  imports: [SharedModule, CommonModule],
  templateUrl: './treatment-plans.component.html',
  styleUrl: './treatment-plans.component.scss'
})
export class TreatmentPlansComponent {
  TreatmentPlansList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private treatmentPlansService: TreatmentPlansService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllTreatmentPlans()
    }, 1000);
  }

  GetAllTreatmentPlans() {
    this.treatmentPlansService.GetAllTreatmentPlans().subscribe({
      next: (result: any) => {
        this.TreatmentPlansList = result;
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
    return Math.ceil(this.TreatmentPlansList.length / this.pageSize);
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
    this.paginatedList = this.TreatmentPlansList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddTreatmentPlansDialog(obj: any) {
    const dialogRef = this.dialog.open(TreatmentPlansDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTreatmentPlans()
    });
  }
}
