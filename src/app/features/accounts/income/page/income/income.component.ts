import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { IncomeService } from '../../income.service';
import { MatDialog } from '@angular/material/dialog';
import { IncomeDialogComponent } from '../../component/income-dialog/income-dialog.component';
import { IncomeDetailsDialogComponent } from '../../component/income-details-dialog/income-details-dialog.component';

@Component({
  selector: 'app-income',
  imports: [SharedModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  IncomeList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private incomeService: IncomeService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllIncome();
    }, 500);
  }

  GetAllIncome() {
    this.incomeService.GetAllIncome().subscribe({
      next: (result: any) => {
        this.IncomeList = result;
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
    return Math.ceil(this.IncomeList.length / this.pageSize);
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
    this.paginatedList = this.IncomeList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddIncomeDialog(obj: any) {
    const dialogRef = this.dialog.open(IncomeDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllIncome();
      }
    });
  }

  OpenIncomeDetailsDialog(IncomeDetails: any) {
    const dialogRef = this.dialog.open(IncomeDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: IncomeDetails,
      disableClose: true
    });
  }
}
