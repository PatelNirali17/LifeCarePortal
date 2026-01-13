import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientsRecordsService } from '../../patients-records.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientsRecordsDialogComponent } from '../../component/add-patients-records-dialog/add-patients-records-dialog.component';
import { PatientsRecordsDetailsDialogComponent } from '../../component/patients-records-details-dialog/patients-records-details-dialog.component';

@Component({
  selector: 'app-patients-records',
  imports: [SharedModule, CommonModule],
  templateUrl: './patients-records.component.html',
  styleUrl: './patients-records.component.scss'
})
export class PatientsRecordsComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'DateofBirth', 'Gender', "Diagnosis", "Status", 'DateofAdmission','NextFollowUp', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private patientsRecordsService: PatientsRecordsService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllPatientsRecords()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllPatientsRecords() {
    this.patientsRecordsService.GetAllPatientsRecords().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddPatientsRecordsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddPatientsRecordsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatientsRecords()
    });
  }

  OpenPatientRecordsDetailsDialog(PatientDetails: any) {
    const dialogRef = this.dialog.open(PatientsRecordsDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: PatientDetails,
      disableClose: true
    });
  }
}
