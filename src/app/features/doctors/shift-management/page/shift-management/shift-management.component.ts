import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ShiftManagementService } from '../../shift-management.service';
import { MatDialog } from '@angular/material/dialog';
import { ShiftManagementDialogComponent } from '../../component/shift-management-dialog/shift-management-dialog.component';
import { ShiftManagementDetailsDialogComponent } from '../../component/shift-management-details-dialog/shift-management-details-dialog.component';

@Component({
  selector: 'app-shift-management',
  imports: [SharedModule, CommonModule],
  templateUrl: './shift-management.component.html',
  styleUrl: './shift-management.component.scss'
})
export class ShiftManagementComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Department', 'Specialization', 'ShiftStartDate', "ShiftEndDate", "WorkDays", "ShiftHours", 'ShiftType', 'AvailabilityStatus', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private shiftManagementService: ShiftManagementService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllShiftManagement()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllShiftManagement() {
    this.shiftManagementService.GetAllShiftManagement().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenShiftManagementDialog(obj: any) {
    const dialogRef = this.dialog.open(ShiftManagementDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllShiftManagement()
    });
  }

  OpenShiftManagementDetails(obj: any) {
    const dialogRef = this.dialog.open(ShiftManagementDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });
  }

}
