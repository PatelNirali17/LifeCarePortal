
import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllotRoomService } from '../../allot-room.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAllotRoomDialogComponent } from '../../component/add-allot-room-dialog/add-allot-room-dialog.component';
import { AllotRoomDetailsDialogComponent } from '../../component/allot-room-details-dialog/allot-room-details-dialog.component';

@Component({
  selector: 'app-allot-room',
  imports: [SharedModule, CommonModule],
  templateUrl: './allot-room.component.html',
  styleUrl: './allot-room.component.scss'
})
export class AllotRoomComponent {
  displayedColumns: string[] = ['SrNo', 'PatientName', 'RoomNumber','RoomType', 'BedNumber', 'Doctor', 'AllotmentDate', 'Status', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private allotRoomService: AllotRoomService, private dialog: MatDialog) {
    setTimeout(() => this.GetAllotments(), 500);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllotments() {
    this.allotRoomService.GetAllotments().subscribe({
      next: (result: any) => this.dataSource.data = result
    })
  }

  OpenAddAllotDialog(obj: any) {
    const dialogRef = this.dialog.open(AddAllotRoomDialogComponent, {
      minWidth: '800px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllotments()
      }
    })
  }

  OpenDetailsDialog(details: any) {
    this.dialog.open(AllotRoomDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: details,
      disableClose: true
    })
  }

}
