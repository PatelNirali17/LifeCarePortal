import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  imports: [SharedModule, CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  RegistrationForm!: FormGroup;

  constructor(private router: Router, private fb: NonNullableFormBuilder,private authenticationService : AuthenticationService,
    private toast : ToastrService
  ) {
    this.RegistrationForm = this.fb.group({
      UserName: this.fb.control(null, Validators.required),
      Email: this.fb.control(null, Validators.required),
      Password: this.fb.control(null, Validators.required)
    })
  }

  OpenLogin() {
    this.router.navigate(['login'])
  }

  Registration(){
    if (this.RegistrationForm.invalid) {
      this.RegistrationForm.markAllAsTouched()
      return
    }
    this.RegistrationForm.value.Role = "Patient"
      this.authenticationService.SaveUserDetails(this.RegistrationForm.value).subscribe({
      next: (result: any) => {
        if (result.error == false) {
          this.toast.success('', 'Save Successfully')
          this.router.navigate(['/login'])
        } else {
          this.toast.error('', result.Message)
        }
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error('Something went wrong',);
      }
    })
  }
}
