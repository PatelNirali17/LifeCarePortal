import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllDoctorsService } from '../../all-doctors.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDoctorDialogComponent } from '../../component/add-doctor-dialog/add-doctor-dialog.component';
import { DoctorDetailsDialogComponent } from '../../component/doctor-details-dialog/doctor-details-dialog.component';

@Component({
  selector: 'app-all-doctors',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.scss'
})
export class AllDoctorsComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Department', 'Availability', "Mobile", "Experience", "ConsultationFee", 'ClinicLocation', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private allDoctorsService: AllDoctorsService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllDocotors()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllDocotors() {
    this.allDoctorsService.GetAllDocotors().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAddDoctorDialog(obj: any) {
    const dialogRef = this.dialog.open(AddDoctorDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDocotors()
    });
  }

  OpenDoctorDetailsDialog(obj: any) {
    const dialogRef = this.dialog.open(DoctorDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
