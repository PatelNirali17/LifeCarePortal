import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AssignDepartmentService } from '../../assign-department.service';
import { MatDialog } from '@angular/material/dialog';
import { AssignDepartmentDialogComponent } from '../../component/assign-department-dialog/assign-department-dialog.component';

@Component({
  selector: 'app-assign-department',
  imports: [SharedModule, CommonModule],
  templateUrl: './assign-department.component.html',
  styleUrl: './assign-department.component.scss'
})
export class AssignDepartmentComponent {
 displayedColumns: string[] = ['SrNo', 'Name', 'Department', 'Specialization', "ShiftSchedule", "ExperienceLevel", "AssignmentStatus", 'AssignedDate', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private assignDepartmentService: AssignDepartmentService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllAssignDepartment()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllAssignDepartment() {
    this.assignDepartmentService.GetAllAssignDepartment().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenAssignDepartmentDialog(obj:any){
  const dialogRef = this.dialog.open(AssignDepartmentDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllAssignDepartment()
    });
  }
}
