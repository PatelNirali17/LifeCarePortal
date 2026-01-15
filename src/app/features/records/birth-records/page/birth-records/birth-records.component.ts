import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BirthRecordsService } from '../../birth-records.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBirthRecordsDialogComponent } from '../../component/add-birth-records-dialog/add-birth-records-dialog.component';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-birth-records',
  imports: [CommonModule, SharedModule],
  templateUrl: './birth-records.component.html',
  styleUrl: './birth-records.component.scss'
})
export class BirthRecordsComponent {
  displayedColumns: string[] = ['SrNo', 'CaseNumber', 'ChildName', 'Gender', 'BirthDate', 'Mother', 'Father', 'Contact', 'Address', 'Notes', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private birthRecordsService: BirthRecordsService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllBirthRecords()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllBirthRecords() {
    this.birthRecordsService.GetAllBirthRecords().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddBirthRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddBirthRecordsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllBirthRecords()
    });
  }

}
