import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ExpensesService } from '../../expenses.service';
import { MatDialog } from '@angular/material/dialog';
import { ExpensesDialogComponent } from '../../component/expenses-dialog/expenses-dialog.component';
import { ExpensesDetailsDialogComponent } from '../../component/expenses-details-dialog/expenses-details-dialog.component';

@Component({
  selector: 'app-expenses',
  imports: [SharedModule, CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {
  ExpensesList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private expensesService: ExpensesService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllExpenses();
    }, 500);
  }

  GetAllExpenses() {
    this.expensesService.GetAllExpenses().subscribe({
      next: (result: any) => {
        this.ExpensesList = result;
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
    return Math.ceil(this.ExpensesList.length / this.pageSize);
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
    this.paginatedList = this.ExpensesList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddExpensesDialog(obj: any) {
    const dialogRef = this.dialog.open(ExpensesDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllExpenses();
      }
    });
  }
  OpenExpensesDetailsDialog(ExpensesDetails: any) {
    const dialogRef = this.dialog.open(ExpensesDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: ExpensesDetails,
      disableClose: true
    });
  }
}
