import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaveTypesService } from '../../leave-types.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveTypesDialogComponent } from '../../component/leave-types-dialog/leave-types-dialog.component';

@Component({
  selector: 'app-leave-types',
  imports: [SharedModule, CommonModule],
  templateUrl: './leave-types.component.html',
  styleUrl: './leave-types.component.scss'
})
export class LeaveTypesComponent {
  LeaveTypeList: any[] = [];

  constructor(private leaveTypesService: LeaveTypesService, private dialog: MatDialog) {
    setTimeout(() => {
      this.GetAllLeaveTypes()
    }, 1000);
  }

  GetAllLeaveTypes() {
    this.leaveTypesService.GetAllLeaveTypes().subscribe({
      next: (result: any) => {
        this.LeaveTypeList = result;
      },
    })
  }

  OpenAddLeaveTypeDialog(obj: any) {
    const dialogRef = this.dialog.open(LeaveTypesDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllLeaveTypes()
    });
  }
}
