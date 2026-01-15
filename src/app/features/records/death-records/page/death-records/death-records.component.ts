import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { DeathRecordsService } from '../../death-records.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-death-records',
  imports: [CommonModule, MatIconModule, MatButtonModule, SharedModule],
  templateUrl: './death-records.component.html',
  styleUrl: './death-records.component.scss'
})
export class DeathRecordsComponent implements OnInit {
  deathRecords: any[] = [];
  filteredRecords: any[] = [];
  currentPage = 1;
  pageSize = 10;
  searchText = '';
  maleCount = 0;
  femaleCount = 0;

  constructor(
    private http: HttpClient,
    private deathRecordsService: DeathRecordsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.GetAllDeathRecords();
    }, 500);
  }

  GetAllDeathRecords() {
    this.http.get<any[]>('json/db-data/death-records.json').subscribe({
      next: (result: any) => {
        this.deathRecords = result;
        this.filteredRecords = result;
        this.updateCounts();
      },
      error: (error) => {
        console.error('Error loading death records:', error);
      }
    });
  }

  updateCounts() {
    this.maleCount = this.deathRecords.filter(x => x.gender === 'Male').length;
    this.femaleCount = this.deathRecords.filter(x => x.gender === 'Female').length;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchText = filterValue;
    this.filteredRecords = this.deathRecords.filter(record =>
      record.patient_name.toLowerCase().includes(filterValue) ||
      record.case_number.toString().includes(filterValue) ||
      record.guardian_name.toLowerCase().includes(filterValue) ||
      record.mobile.includes(filterValue)
    );
    this.currentPage = 1;
  }

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredRecords.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredRecords.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  OpenAddDeathRecordsDialog(obj: any) {
    // TODO: Implement add dialog if needed
  }

  EditRecord(obj: any) {
    // TODO: Implement edit functionality
  }

  DeleteRecord(obj: any) {
    // TODO: Implement delete functionality
  }
}
