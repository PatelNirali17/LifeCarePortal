import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AllStaffService } from '../../all-staff.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddStaffDialogComponent } from '../../component/add-staff-dialog/add-staff-dialog.component';
import { StaffDetailsDialogComponent } from '../../component/staff-details-dialog/staff-details-dialog.component';

@Component({
  selector: 'app-all-staff',
  imports: [SharedModule, CommonModule],
  templateUrl: './all-staff.component.html',
  styleUrl: './all-staff.component.scss'
})
export class AllStaffComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Gender', 'Designation', "Mobile", "Email", "JoiningDate", 'Salary', 'Shift', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private allStaffService: AllStaffService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllStaff()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllStaff() {
    this.allStaffService.GetAllStaff().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAllStaffDialog(obj: any) {
    const dialogRef = this.dialog.open(AddStaffDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllStaff()
    });
  }

  OpenStaffDetailsDialog(obj: any) {
    const dialogRef = this.dialog.open(StaffDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
