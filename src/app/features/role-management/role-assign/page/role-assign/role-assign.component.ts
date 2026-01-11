import { Component, ViewChild } from '@angular/core';
import { RoleAssignService } from '../../role-assign.service';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RoleAssignDialogComponent } from '../../component/role-assign-dialog/role-assign-dialog.component';

@Component({
  selector: 'app-role-assign',
  imports: [SharedModule, CommonModule],
  templateUrl: './role-assign.component.html',
  styleUrl: './role-assign.component.scss'
})
export class RoleAssignComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'Role', 'CreatedDate', 'UpdatedDate', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roleAssignService: RoleAssignService, private dialog: MatDialog) {
   setTimeout(() => {
    this.GetAllRoleAssign()
   }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllRoleAssign() {
    this.roleAssignService.GetAllRoleAssign().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenRoleAssignDialog(obj: any) {
    const dialogRef = this.dialog.open(RoleAssignDialogComponent, {
      width: '500px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllRoleAssign()
    });
  }

  EditRoleAssign(RoleAssignDetails: any) {
    this.OpenRoleAssignDialog(RoleAssignDetails)
  }
}
