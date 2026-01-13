import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllPatientsService } from '../../all-patients.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientDialogComponent } from '../../component/add-patient-dialog/add-patient-dialog.component';
import { PatientDetailsDialogComponent } from '../../component/patient-details-dialog/patient-details-dialog.component';

@Component({
  selector: 'app-all-patients',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-patients.component.html',
  styleUrl: './all-patients.component.scss'
})
export class AllPatientsComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Treatment', 'Gender', "AdmissionDate", "DoctorAssigned", 'Status', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private allPatientsService: AllPatientsService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllPatients()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllPatients() {
    this.allPatientsService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddPatientsDialog(obj: any) {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPatients()
    });
  }

  OpenPatientDetailsDialog(PatientDetails: any) {
    const dialogRef = this.dialog.open(PatientDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: PatientDetails,
      disableClose: true
    });
  }
}
