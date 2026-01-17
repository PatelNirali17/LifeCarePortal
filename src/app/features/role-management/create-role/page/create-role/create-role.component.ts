import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CreateRoleService } from '../../create-role.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoleDialogComponent } from '../../component/create-role-dialog/create-role-dialog.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss'
})
export class CreateRoleComponent {
  RoleList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private createRoleService: CreateRoleService, private dialog: MatDialog, private toast: ToastrService, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllRole()
    }, 1000);
  }

  GetAllRole() {
    this.createRoleService.GetAllRole().subscribe({
      next: (result: any) => {
        this.RoleList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      },
    })
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.RoleList.length / this.pageSize);
  }

  get currentPage(): number {
    return this.pageIndex + 1;
  }

  get pagesArray(): any[] {
    return Array(this.totalPages).fill(0);
  }

  updatePaginatedList(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedList = this.RoleList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenRoleDialog(obj: any) {
    const dialogRef = this.dialog.open(CreateRoleDialogComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      data: obj ? obj : null,
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
