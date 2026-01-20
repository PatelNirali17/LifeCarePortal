import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RoomMasterService } from '../../room-master.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomMasterDialogComponent } from '../../component/add-room-master-dialog/add-room-master-dialog.component';

@Component({
  selector: 'app-room-master',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-master.component.html',
  styleUrl: './room-master.component.scss'
})
export class RoomMasterComponent {
  RoomMasterList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private roomMasterService: RoomMasterService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetRoomMaster()
    }, 1000);
  }

  GetRoomMaster() {
    this.roomMasterService.GetRoomMaster().subscribe({
      next: (result: any) => {
        this.RoomMasterList = result;
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
    return Math.ceil(this.RoomMasterList.length / this.pageSize);
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
    this.paginatedList = this.RoomMasterList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddRoomMasterDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomMasterDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomMaster()
    });
  }

}
