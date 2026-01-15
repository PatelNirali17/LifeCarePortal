import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmbulanceListService } from '../../ambulance-list.service';

interface Ambulance {
  id: string;
  vehicle_number: string;
  vehicle_name: string;
  year_made: number;
  driver_name: string;
  driver_license_number: string;
  driver_number: string;
  vehicle_type: string;
  notes: string;
}

@Component({
  selector: 'app-ambulance-list',
  imports: [SharedModule, CommonModule, FormsModule,],
  templateUrl: './ambulance-list.component.html',
  styleUrl: './ambulance-list.component.scss'
})
export class AmbulanceListComponent implements OnInit {
  ambulances: Ambulance[] = [];
  filteredAmbulances: Ambulance[] = [];
  searchTerm: string = '';
  selectedType: string = 'All';
  loading: boolean = false;
  vehicleTypes: string[] = [];

  constructor(private ambulanceService: AmbulanceListService) {}

  ngOnInit() {
    this.loadAmbulances();
  }

  loadAmbulances() {
    this.loading = true;
    this.ambulanceService.getAmbulanceList().subscribe({
      next: (data: Ambulance[]) => {
        this.ambulances = data;
        this.filteredAmbulances = data;
        this.extractVehicleTypes();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  extractVehicleTypes() {
    this.vehicleTypes = ['All', ...new Set(this.ambulances.map(a => a.vehicle_type))];
  }

  onSearch() {
    this.applyFilters();
  }

  onTypeChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredAmbulances = this.ambulances.filter(ambulance => {
      const matchesSearch = ambulance.vehicle_number.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        ambulance.vehicle_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        ambulance.driver_name.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesType = this.selectedType === 'All' || ambulance.vehicle_type === this.selectedType;
      
      return matchesSearch && matchesType;
    });
  }

  getVehicleAge(yearMade: number): number {
    return new Date().getFullYear() - yearMade;
  }

  getVehicleCondition(yearMade: number): string {
    const age = this.getVehicleAge(yearMade);
    if (age <= 3) return 'Excellent';
    if (age <= 7) return 'Good';
    if (age <= 12) return 'Fair';
    return 'Old';
  }

  getConditionBadgeClass(yearMade: number): string {
    const condition = this.getVehicleCondition(yearMade);
    return {
      'Excellent': 'success',
      'Good': 'info',
      'Fair': 'warning',
      'Old': 'danger'
    }[condition] || 'secondary';
  }
}
