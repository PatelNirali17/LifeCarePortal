import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { BloodDonorService } from '../../blood-donor.service';
import { MatDialog } from '@angular/material/dialog';
import { BloodDonorDialogComponent } from '../../component/blood-donor-dialog/blood-donor-dialog.component';
import { BloodDonorDetailsDialogComponent } from '../../component/blood-donor-details-dialog/blood-donor-details-dialog.component';

@Component({
  selector: 'app-blood-donor',
  imports: [CommonModule, SharedModule],
  templateUrl: './blood-donor.component.html',
  styleUrl: './blood-donor.component.scss'
})
export class BloodDonorComponent {
  BloodDonorList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private bloodDonorService: BloodDonorService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.GetAllBloodDonor();
    }, 500);
  }

  GetAllBloodDonor() {
    this.bloodDonorService.GetAllBloodDonor().subscribe({
      next: (result: any) => {
        this.BloodDonorList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.BloodDonorList.length / this.pageSize);
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
    this.paginatedList = this.BloodDonorList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddBloodDonorDialog(obj: any) {
    const dialogRef = this.dialog.open(BloodDonorDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetAllBloodDonor();
      }
    });
  }

  OpenBloodDonorDetailsDialog(BoolDonorDetails: any) {
    const dialogRef = this.dialog.open(BloodDonorDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: BoolDonorDetails,
      disableClose: true
    });
  }
}
