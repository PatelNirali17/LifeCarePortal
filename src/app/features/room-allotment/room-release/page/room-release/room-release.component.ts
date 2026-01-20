import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RoomReleaseService } from '../../room-release.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomReleaseDialogComponent } from '../../component/add-room-release-dialog/add-room-release-dialog.component';

@Component({
  selector: 'app-room-release',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-release.component.html',
  styleUrl: './room-release.component.scss'
})
export class RoomReleaseComponent {
  RoomReleaseList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private roomReleaseService: RoomReleaseService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetRoomRelease()
    }, 1000);
  }

  GetRoomRelease() {
    this.roomReleaseService.GetRoomRelease().subscribe({
      next: (result: any) => {
        this.RoomReleaseList = result;
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
    return Math.ceil(this.RoomReleaseList.length / this.pageSize);
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
    this.paginatedList = this.RoomReleaseList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddRoomReleaseDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomReleaseDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomRelease()
    });
  }

}
