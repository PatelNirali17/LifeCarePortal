import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmbulanceCallListService } from '../../ambulance-call-list.service';
import { MatDialog } from '@angular/material/dialog';
import { AmbulanceCallListDialogComponent } from '../../component/ambulance-call-list-dialog/ambulance-call-list-dialog.component';

@Component({
  selector: 'app-ambulance-call-list',
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './ambulance-call-list.component.html',
  styleUrl: './ambulance-call-list.component.scss'
})
export class AmbulanceCallListComponent {
  AmbulanceCallList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private ambulanceCallListService: AmbulanceCallListService, private cdr: ChangeDetectorRef,private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAmbulanceCallList()
    }, 1000);
  }


  GetAmbulanceCallList() {
    this.ambulanceCallListService.getAmbulanceCallList().subscribe({
      next: (data) => {
        this.AmbulanceCallList = data;
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
    return Math.ceil(this.AmbulanceCallList.length / this.pageSize);
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
    this.paginatedList = this.AmbulanceCallList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAmbulanceCallListDialog(obj: any): void {
    const dialogRef = this.dialog.open(AmbulanceCallListDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      disableClose: true,
      data: obj ? obj : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAmbulanceCallList()
      }
    });
  }
}
