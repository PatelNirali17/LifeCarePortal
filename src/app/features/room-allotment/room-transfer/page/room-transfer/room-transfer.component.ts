import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RoomTransferService } from '../../room-transfer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomTransferDialogComponent } from '../../component/add-room-transfer-dialog/add-room-transfer-dialog.component';

@Component({
  selector: 'app-room-transfer',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-transfer.component.html',
  styleUrl: './room-transfer.component.scss'
})
export class RoomTransferComponent {
  RoomTransferList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private roomTransferService: RoomTransferService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetRoomTransfer()
    }, 1000);
  }

  GetRoomTransfer() {
    this.roomTransferService.GetRoomTransfer().subscribe({
      next: (result: any) => {
        this.RoomTransferList = result;
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
    return Math.ceil(this.RoomTransferList.length / this.pageSize);
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
    this.paginatedList = this.RoomTransferList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddRoomTransferDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomTransferDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomTransfer()
    });
  }

}
