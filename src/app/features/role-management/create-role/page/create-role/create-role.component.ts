import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateRoleService } from '../../create-role.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoleDialogComponent } from '../../component/create-role-dialog/create-role-dialog.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-role',
  imports: [SharedModule, CommonModule],
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss'
})
export class CreateRoleComponent {
  displayedColumns: string[] = ['SrNo', 'Name', 'CreatedDate', 'UpdatedDate', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private createRoleService: CreateRoleService, private dialog: MatDialog,private toast : ToastrService) {
    setTimeout(() => {
      this.GetAllRole()
    }, 1000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  GetAllRole() {
    this.createRoleService.GetAllRole().subscribe({
      next: (result: any) => {
        this.dataSource.data = result
      },
    })
  }

  OpenRoleDialog(obj: any) {
    const dialogRef = this.dialog.open(CreateRoleDialogComponent, {
      width: '500px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllRole()
    });
  }

  EditRole(RoleDetails: any) {
    this.OpenRoleDialog(RoleDetails)
  }

  DeleteRole(RoleDetails: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Delete this Role!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.createRoleService.DeleteRole(RoleDetails?.id).subscribe({
          next: (result) => {
            if (result.error == false) {
              Swal.fire(
                'Deleted!',
                'Your record has been deleted.',
                'success'
              )
              this.GetAllRole()
            } else {
              this.toast.error('', result.Message)
            }
          },
          error: (err) => {
            this.toast.error('', 'Something went wrong')
          }
        });
      }
    })

  }

}
