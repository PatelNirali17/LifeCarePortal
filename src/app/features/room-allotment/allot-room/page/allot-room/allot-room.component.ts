
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AllotRoomService } from '../../allot-room.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAllotRoomDialogComponent } from '../../component/add-allot-room-dialog/add-allot-room-dialog.component';

@Component({
  selector: 'app-allot-room',
  imports: [SharedModule, CommonModule],
  templateUrl: './allot-room.component.html',
  styleUrl: './allot-room.component.scss'
})
export class AllotRoomComponent {
  AllotRoomList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private allotRoomService: AllotRoomService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => this.GetAllotments(), 500);
  }

  GetAllotments() {
    this.allotRoomService.GetAllotments().subscribe({
      next: (result: any) => {
        this.AllotRoomList = result;
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
    return Math.ceil(this.AllotRoomList.length / this.pageSize);
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
    this.paginatedList = this.AllotRoomList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddAllotDialog(obj: any) {
    const dialogRef = this.dialog.open(AddAllotRoomDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllotments()
      }
    })
  }

}
