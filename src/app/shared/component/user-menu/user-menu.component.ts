import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../core/service/authentication.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  imports: [SharedModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  LoginType: any;

  constructor(private authenticationService: AuthenticationService, @Inject(PLATFORM_ID) private platformId: object, private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.LoginType = UserDetails.Role
    }
  }

  logout() {
    this.authenticationService.logout()
    this.router.navigate(['login'])
  }
}
