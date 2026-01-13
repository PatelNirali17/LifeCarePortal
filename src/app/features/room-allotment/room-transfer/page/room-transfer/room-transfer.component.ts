import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoomTransferService } from '../../room-transfer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomTransferDialogComponent } from '../../component/add-room-transfer-dialog/add-room-transfer-dialog.component';
import { RoomTransferDetailsDialogComponent } from '../../component/room-transfer-details-dialog/room-transfer-details-dialog.component';

@Component({
  selector: 'app-room-transfer',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-transfer.component.html',
  styleUrl: './room-transfer.component.scss'
})
export class RoomTransferComponent {
 displayedColumns: string[] = ['SrNo', 'PatientName', 'FromRoomNumber', 'ToRoomNumber', "FromBedNumber", "ToBedNumber", 'TransferDate', 'Reason', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomTransferService: RoomTransferService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetRoomTransfer()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetRoomTransfer() {
    this.roomTransferService.GetRoomTransfer().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddRoomTransferDialog(obj: any) {
    const dialogRef = this.dialog.open(AddRoomTransferDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomTransfer()
    });
  }

  OpenRoomTransferDetailsDialog(RoomTransferDetails: any) {
    const dialogRef = this.dialog.open(RoomTransferDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: RoomTransferDetails,
      disableClose: true
    });
  }
}
