import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoomMasterService } from '../../room-master.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomMasterDialogComponent } from '../../component/add-room-master-dialog/add-room-master-dialog.component';
import { RoomMasterDetailsDialogComponent } from '../../component/room-master-details-dialog/room-master-details-dialog.component';

@Component({
  selector: 'app-room-master',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-master.component.html',
  styleUrl: './room-master.component.scss'
})
export class RoomMasterComponent {
  displayedColumns: string[] = ['SrNo', 'RoomNumber', 'RoomType', 'Ward', "Floor", "TotalBeds", 'ChargePerDay', 'Status', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomMasterService: RoomMasterService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetRoomMaster()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetRoomMaster() {
    this.roomMasterService.GetRoomMaster().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddRoomMasterDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomMasterDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomMaster()
    });
  }

  OpenRoomMasterDetailsDialog(RoomMasterDetails: any) {
    const dialogRef = this.dialog.open(RoomMasterDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: RoomMasterDetails,
      disableClose: true
    });
  }
}
