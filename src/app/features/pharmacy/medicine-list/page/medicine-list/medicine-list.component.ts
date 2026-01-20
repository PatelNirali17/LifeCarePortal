import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { MedicineListService } from '../../medicine-list.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicineListDialogComponent } from '../../component/medicine-list-dialog/medicine-list-dialog.component';

@Component({
  selector: 'app-medicine-list',
  imports: [CommonModule, SharedModule],
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.scss'
})
export class MedicineListComponent {
  MedicineListList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private medicineListService: MedicineListService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllMedicineList();
    }, 500);
  }

  GetAllMedicineList() {
    this.medicineListService.GetAllMedicinesList().subscribe({
      next: (result: any) => {
        this.MedicineListList = result;
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
    return Math.ceil(this.MedicineListList.length / this.pageSize);
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
    this.paginatedList = this.MedicineListList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddMedicineListDialog(obj: any) {
    const dialogRef = this.dialog.open(MedicineListDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllMedicineList();
      }
    });
  }
}
