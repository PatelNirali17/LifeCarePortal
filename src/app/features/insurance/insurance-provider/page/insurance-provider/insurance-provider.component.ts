import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { InsuranceProviderService } from '../../insurance-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { InsuranceProviderDialogComponent } from '../../component/insurance-provider-dialog/insurance-provider-dialog.component';
import { InsuranceProviderDetailsDialogComponent } from '../../component/insurance-provider-details-dialog/insurance-provider-details-dialog.component';

@Component({
  selector: 'app-insurance-provider',
  imports: [SharedModule, CommonModule],
  templateUrl: './insurance-provider.component.html',
  styleUrl: './insurance-provider.component.scss'
})
export class InsuranceProviderComponent {
  InsuranceProviderList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private insuranceProviderService: InsuranceProviderService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllInsuranceProvider()
    }, 1000);
  }

  GetAllInsuranceProvider() {
    this.insuranceProviderService.GetAllInsuranceProvider().subscribe({
      next: (result: any) => {
        this.InsuranceProviderList = result;
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
    return Math.ceil(this.InsuranceProviderList.length / this.pageSize);
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
    this.paginatedList = this.InsuranceProviderList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddInsuranceProviderDialog(obj: any) {
    const dialogRef = this.dialog.open(InsuranceProviderDialogComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllInsuranceProvider()
    });
  }

  OpenInsuranceProviderDetailsDialog(InsuranceProviderDetails: any) {
    const dialogRef = this.dialog.open(InsuranceProviderDetailsDialogComponent, {
      minWidth: '1000px',
      maxWidth: '1000px',
      data: InsuranceProviderDetails,
      disableClose: true
    });
  }

}
