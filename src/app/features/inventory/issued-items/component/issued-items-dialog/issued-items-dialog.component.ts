import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemStockListService } from '../../../item-stock-list/item-stock-list.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-issued-items-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './issued-items-dialog.component.html',
  styleUrl: './issued-items-dialog.component.scss'
})
export class IssuedItemsDialogComponent {
  IssuedItemsForm!: FormGroup;
  ItemList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<IssuedItemsDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private itemStockListService: ItemStockListService,
    @Optional() @Inject(MAT_DIALOG_DATA) public IssuedItemsDetails: any) {
    this.IssuedItemsForm = this.fb.group({
      ItemName: this.fb.control('', Validators.required),
      IssueDate: this.fb.control('', Validators.required),
      ReturnDate: this.fb.control('', Validators.required),
      IssuedTo: this.fb.control('', Validators.required),
      Quantity: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
    })

    this.itemStockListService.GetAllItemStockList().subscribe({
      next: (result: any) => {
        this.ItemList = result
      }
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      }
    })

  }

}
