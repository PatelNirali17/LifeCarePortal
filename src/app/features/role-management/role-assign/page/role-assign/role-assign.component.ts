import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RoleAssignService } from '../../role-assign.service';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RoleAssignDialogComponent } from '../../component/role-assign-dialog/role-assign-dialog.component';

@Component({
  selector: 'app-role-assign',
  imports: [SharedModule, CommonModule],
  templateUrl: './role-assign.component.html',
  styleUrl: './role-assign.component.scss'
})
export class RoleAssignComponent {
  RoleAssignList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private roleAssignService: RoleAssignService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllRoleAssign()
    }, 1000);
  }

  GetAllRoleAssign() {
    this.roleAssignService.GetAllRoleAssign().subscribe({
      next: (result: any) => {
        this.RoleAssignList = result;
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
    return Math.ceil(this.RoleAssignList.length / this.pageSize);
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
    this.paginatedList = this.RoleAssignList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenRoleAssignDialog(obj: any) {
    const dialogRef = this.dialog.open(RoleAssignDialogComponent, {
      width: '500px',
      data: obj ? obj : null,
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
