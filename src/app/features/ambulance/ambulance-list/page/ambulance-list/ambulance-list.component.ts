import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmbulanceListService } from '../../ambulance-list.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AmbulanceListDialogComponent } from '../../component/ambulance-list-dialog/ambulance-list-dialog.component';

@Component({
  selector: 'app-ambulance-list',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './ambulance-list.component.html',
  styleUrl: './ambulance-list.component.scss'
})
export class AmbulanceListComponent {
  ambulanceList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private ambulanceService: AmbulanceListService, private cdr: ChangeDetectorRef,
    private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllAmbulanceList()
    }, 1000);
  }


  GetAllAmbulanceList() {
    this.ambulanceService.getAmbulanceList().subscribe({
      next: (data) => {
        this.ambulanceList = data;
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
    return Math.ceil(this.ambulanceList.length / this.pageSize);
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
    this.paginatedList = this.ambulanceList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAmbulanceListDialog(obj:any): void {
    const dialogRef = this.dialog.open(AmbulanceListDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      disableClose: true,
      data: obj ? obj : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllAmbulanceList()
      }
    });
  }

}
