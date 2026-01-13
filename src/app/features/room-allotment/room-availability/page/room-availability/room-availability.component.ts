import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoomAvailabilityService } from '../../room-availability.service';
import { MatDialog } from '@angular/material/dialog';
import { RoomAvailabilityDetailsDialogComponent } from '../../component/room-availability-details-dialog/room-availability-details-dialog.component';

@Component({
  selector: 'app-room-availability',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-availability.component.html',
  styleUrl: './room-availability.component.scss'
})
export class RoomAvailabilityComponent {
  displayedColumns: string[] = ['SrNo', 'RoomType', 'AvailableBeds', 'OccupiedBeds', "Status"];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomAvailabilityService: RoomAvailabilityService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetRoomAvailability()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetRoomAvailability() {
    this.roomAvailabilityService.GetRoomAvailability().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }


  OpenRoomAvailabilityDetailsDialog(RoomAvailabilityDetails: any) {
    const dialogRef = this.dialog.open(RoomAvailabilityDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: RoomAvailabilityDetails,
      disableClose: true
    });
  }

}
