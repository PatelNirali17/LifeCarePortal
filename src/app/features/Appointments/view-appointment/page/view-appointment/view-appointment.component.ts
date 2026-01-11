import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewAppointmentService } from '../../view-appointment.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewAppointmentDialogComponent } from '../../component/view-appointment-dialog/view-appointment-dialog.component';
import { AppointmentDetailsDialogComponent } from '../../component/appointment-details-dialog/appointment-details-dialog.component';

@Component({
  selector: 'app-view-appointment',
  imports: [SharedModule, CommonModule],
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.scss'
})
export class ViewAppointmentComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Doctor', 'Gender', 'Date', "Time", "Mobile", "Email", "AppointmentStatus", "VisitType", 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private viewAppointmentService: ViewAppointmentService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllAppointment()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllAppointment() {
    this.viewAppointmentService.GetAllAppointment().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenViewAppointmentDailog(obj: any) {
    const dialogRef = this.dialog.open(ViewAppointmentDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllAppointment()
    });
  }

  OpenAppointmentDetailsDialog(AppointmentDetails: any) {
    const dialogRef = this.dialog.open(AppointmentDetailsDialogComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      data: AppointmentDetails,
      disableClose: true
    });
  }

}
