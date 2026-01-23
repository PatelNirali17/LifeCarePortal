import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-test-catalog-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-catalog-dialog.component.html',
  styleUrl: './test-catalog-dialog.component.scss'
})
export class TestCatalogDialogComponent {
  TestCatalogForm!: FormGroup;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<TestCatalogDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public TestCatalogDetails: any
  ) {
    this.TestCatalogForm = this.fb.group({
      TestName: this.fb.control('', Validators.required),
      Category: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
      SampleType: this.fb.control('', Validators.required),
      Price: this.fb.control('', Validators.required),
      Duration: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
    })
    this.allDoctorsService.GetAllDepartment().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      },
    })
  }
}
