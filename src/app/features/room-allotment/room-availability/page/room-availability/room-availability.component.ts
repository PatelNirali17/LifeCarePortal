import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RoomAvailabilityService } from '../../room-availability.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-room-availability',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-availability.component.html',
  styleUrl: './room-availability.component.scss'
})
export class RoomAvailabilityComponent {
  RoomAvailabilityList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private roomAvailabilityService: RoomAvailabilityService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetRoomAvailability()
    }, 1000);
  }

  GetRoomAvailability() {
    this.roomAvailabilityService.GetRoomAvailability().subscribe({
      next: (result: any) => {
        this.RoomAvailabilityList = result;
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
    return Math.ceil(this.RoomAvailabilityList.length / this.pageSize);
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
    this.paginatedList = this.RoomAvailabilityList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

}
