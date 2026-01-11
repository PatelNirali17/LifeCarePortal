import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginForm!: FormGroup;

  constructor(private router: Router, private fb: NonNullableFormBuilder, private authenticationService: AuthenticationService,
    private toast: ToastrService) {
    this.LoginForm = this.fb.group({
      Role: this.fb.control(null, Validators.required),
      Email: this.fb.control(null, Validators.required),
      Password: this.fb.control(null, Validators.required)
    })
  }

  OpenRegister() {
    this.router.navigate(['/register'])
  }

  CheckInLogin() {
    // if (this.LoginForm.invalid) {
    //   this.LoginForm.markAllAsTouched()
    //   return
    // }
    const roleRouteMap: Record<string, string> = {
      Admin: '/dashboard', Doctor: '/doctordashboard', Patient: '/patientdashboard'
    };
    this.toast.success('', 'Login Successfully')
    this.router.navigate([roleRouteMap[this.LoginForm.value.Role] || '/']);
    // this.authenticationService.CheckLogin(this.LoginForm.value).subscribe({
    //   next: (result: any) => {
    //     if (result.error == false) {
    //       this.toast.success('', 'Login Successfully')
    //       this.router.navigate([roleRouteMap[this.LoginForm.value.Role] || '/']);
    //     } else {
    //       this.toast.error('', result.Message)
    //     }
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     this.toast.error('Something went wrong',);
    //   }
    // })
  }

}
