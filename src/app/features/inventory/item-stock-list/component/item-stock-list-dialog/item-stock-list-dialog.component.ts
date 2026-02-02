import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-stock-list-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './item-stock-list-dialog.component.html',
  styleUrl: './item-stock-list-dialog.component.scss'
})
export class ItemStockListDialogComponent {
  ItemStockForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ItemStockListDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public ItemStockDetails: any) {
    this.ItemStockForm = this.fb.group({
      ItemName: this.fb.control('', Validators.required),
      Category: this.fb.control('', Validators.required),
      Quantity: this.fb.control('', Validators.required),
      Date: this.fb.control('', Validators.required),
      Price: this.fb.control('', Validators.required),
      Details: this.fb.control('', Validators.required)
    })

  }

}
