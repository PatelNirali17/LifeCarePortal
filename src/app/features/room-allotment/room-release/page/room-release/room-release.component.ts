import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoomReleaseService } from '../../room-release.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomReleaseDialogComponent } from '../../component/add-room-release-dialog/add-room-release-dialog.component';
import { RoomReleaseDetailsDialogComponent } from '../../component/room-release-details-dialog/room-release-details-dialog.component';

@Component({
  selector: 'app-room-release',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-release.component.html',
  styleUrl: './room-release.component.scss'
})
export class RoomReleaseComponent {
  displayedColumns: string[] = ['SrNo', 'PatientName', 'RoomNumber', 'BedNumber', "DischargeDate", "TotalDays", 'RoomCharges', 'RoomStatus', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomReleaseService: RoomReleaseService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetRoomRelease()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetRoomRelease() {
    this.roomReleaseService.GetRoomRelease().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddRoomReleaseDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomReleaseDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomRelease()
    });
  }

  OpenRoomReleaseDetailsDialog(RoomReleaseDetails: any) {
    const dialogRef = this.dialog.open(RoomReleaseDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: RoomReleaseDetails,
      disableClose: true
    });
  }

}
