import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BedMasterService } from '../../bed-master.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBedMasterDialogComponent } from '../../component/add-bed-master-dialog/add-bed-master-dialog.component';

@Component({
  selector: 'app-bed-master',
  imports: [SharedModule, CommonModule],
  templateUrl: './bed-master.component.html',
  styleUrl: './bed-master.component.scss'
})
export class BedMasterComponent {
  BedMasterList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private bedMasterService: BedMasterService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetBedMaster()
    }, 500);
  }

  GetBedMaster() {
    this.bedMasterService.GetBedMaster().subscribe({
      next: (result: any) => {
        this.BedMasterList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      }
    })
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.BedMasterList.length / this.pageSize);
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
    this.paginatedList = this.BedMasterList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBedMasterDialog(obj: any) {
    const dialogRef = this.dialog.open(AddBedMasterDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetBedMaster()
    });
  }

}
