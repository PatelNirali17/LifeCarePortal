import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidenavService } from '../service/sidenav.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-sidenav',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Output() closeSideNav = new EventEmitter();
  activeLink: string = '';
  Name = 'Admin'
  menuItems: any;
  constructor(private router: Router, private sidenavService: SidenavService, private authenticationService: AuthenticationService) {
    console.log(this.authenticationService.currentUserValue.Data)
    this.sidenavService.GetSideMenuList().subscribe({
      next: (result: any) => {
        const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
        const roleMenuMap: any = { Admin: result.AdminSideMenu, Doctor: result.DoctorSideMenu, Patient: result.PatientSideMenu };
        this.menuItems = roleMenuMap[UserDetails.Role]
        // if (this.authenticationService.currentUserValue.Data.Role == 'Admin') {
        //   this.menuItems = result.AdminSideMenu
        // }else if (this.authenticationService.currentUserValue.Data.Role == 'Doctor') {
        //   this.menuItems = result.DoctorSideMenu
        // }else if (this.authenticationService.currentUserValue.Data.Role == 'Patient') {
        //   this.menuItems = result.PatientSideMenu
        // } else {
        //   this.menuItems = []
        // }
      },
    })

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.activeLink = event.urlAfterRedirects;
    });
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  logout() {
    this.closeSideNav.emit();
    this.authenticationService.logout()
    this.router.navigate(['login'])
  }

  isMenuExpanded(menu: any): boolean {
    return menu?.links?.some((link: any) => this.activeLink === link?.path);
  }

}
