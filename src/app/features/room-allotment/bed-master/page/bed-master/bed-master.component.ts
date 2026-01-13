import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BedMasterService } from '../../bed-master.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBedMasterDialogComponent } from '../../component/add-bed-master-dialog/add-bed-master-dialog.component';
import { BedMasterDetailsDialogComponent } from '../../component/bed-master-details-dialog/bed-master-details-dialog.component';

@Component({
  selector: 'app-bed-master',
  imports: [SharedModule, CommonModule],
  templateUrl: './bed-master.component.html',
  styleUrl: './bed-master.component.scss'
})
export class BedMasterComponent {
  displayedColumns: string[] = ['SrNo', 'BedNumber', 'RoomType', 'BedType', 'Status', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bedMasterService: BedMasterService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetBedMaster()
    }, 500);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetBedMaster() {
    this.bedMasterService.GetBedMaster().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      }
    })
  }

  OpenAddBedMasterDialog(obj: any) {
    const dialogRef = this.dialog.open(AddBedMasterDialogComponent, {
      minWidth: '800px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetBedMaster()
    });
  }

  OpenBedMasterDetailsDialog(details: any) {
    this.dialog.open(BedMasterDetailsDialogComponent, {
      minWidth: '800px',
      maxWidth: '1000px',
      data: details,
      disableClose: true
    })
  }

}
