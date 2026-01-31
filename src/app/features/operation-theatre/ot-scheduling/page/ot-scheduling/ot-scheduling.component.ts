import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { OtSchedulingService } from '../../ot-scheduling.service';
import { MatDialog } from '@angular/material/dialog';
import { OtSchedulingDialogComponent } from '../../component/ot-scheduling-dialog/ot-scheduling-dialog.component';

@Component({
  selector: 'app-ot-scheduling',
  imports: [SharedModule, CommonModule],
  templateUrl: './ot-scheduling.component.html',
  styleUrl: './ot-scheduling.component.scss'
})
export class OtSchedulingComponent {
  OtSchedulingList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private otSchedulingService: OtSchedulingService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllOtScheduling()
    }, 1000);
  }

  GetAllOtScheduling() {
    this.otSchedulingService.GetAllOTScheduling().subscribe({
      next: (result: any) => {
        this.OtSchedulingList = result;
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
    return Math.ceil(this.OtSchedulingList.length / this.pageSize);
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
    this.paginatedList = this.OtSchedulingList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddOtSchedulingDialog(obj: any) {
    const dialogRef = this.dialog.open(OtSchedulingDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllOtScheduling()
    });
  }
}
