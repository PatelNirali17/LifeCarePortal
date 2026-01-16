import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmbulanceListService } from '../../ambulance-list.service';

@Component({
  selector: 'app-ambulance-list',
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './ambulance-list.component.html',
  styleUrl: './ambulance-list.component.scss'
})
export class AmbulanceListComponent {
 

  constructor(private ambulanceService: AmbulanceListService, private cdr: ChangeDetectorRef) {
  }

  
}
