import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TechnicianAssignmentService } from '../../technician-assignment.service';
import { MatDialog } from '@angular/material/dialog';
import { TechnicianAssignmentDialogComponent } from '../../component/technician-assignment-dialog/technician-assignment-dialog.component';

@Component({
  selector: 'app-technician-assignment',
  imports: [SharedModule, CommonModule],
  templateUrl: './technician-assignment.component.html',
  styleUrl: './technician-assignment.component.scss'
})
export class TechnicianAssignmentComponent {
  TechnicianAssignmentList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private technicianAssignmentService: TechnicianAssignmentService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllTechnicianAssignment()
    }, 1000);
  }

  GetAllTechnicianAssignment() {
    this.technicianAssignmentService.GetAllTechnicianAssignment().subscribe({
      next: (result: any) => {
        this.TechnicianAssignmentList = result;
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
    return Math.ceil(this.TechnicianAssignmentList.length / this.pageSize);
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
    this.paginatedList = this.TechnicianAssignmentList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddTechnicianAssignmentDialog(obj: any) {
    const dialogRef = this.dialog.open(TechnicianAssignmentDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllTechnicianAssignment()
    });
  }
}
