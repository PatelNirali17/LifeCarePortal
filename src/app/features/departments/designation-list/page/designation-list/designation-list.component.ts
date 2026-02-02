import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesignationListService } from '../../designation-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DesignationListDialogComponent } from '../../component/designation-list-dialog/designation-list-dialog.component';

@Component({
  selector: 'app-designation-list',
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './designation-list.component.html',
  styleUrl: './designation-list.component.scss'
})
export class DesignationListComponent {
  DesignationList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private designationListService: DesignationListService, private dialog: MatDialog, private toast: ToastrService, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllDesignation()
    }, 1000);
  }

  GetAllDesignation() {
    this.designationListService.GetAllDesignationList().subscribe({
      next: (result: any) => {
        this.DesignationList = result;
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
    return Math.ceil(this.DesignationList.length / this.pageSize);
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
    this.paginatedList = this.DesignationList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenDesignationDialog(obj: any) {
    const dialogRef = this.dialog.open(DesignationListDialogComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDesignation()
    });
  }

}
