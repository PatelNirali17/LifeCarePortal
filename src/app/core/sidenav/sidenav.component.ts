import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  constructor(private router: Router, private sidenavService: SidenavService, private authenticationService: AuthenticationService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    console.log(this.authenticationService.currentUserValue.Data)
    if (isPlatformBrowser(this.platformId)) {
      var UserMenuList = this.sidenavService.UserMenuValue
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      const roleMenuMap: any = { Admin: UserMenuList.AdminMenu, Doctor: UserMenuList.DoctorMenu, Patient: UserMenuList.PatientMenu };
      const MenuList = this.buildMenuTree(roleMenuMap[UserDetails.Role]);
      this.menuItems = MenuList || [];
    }
    router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
    //   this.activeLink = event.urlAfterRedirects;
    // });
  }

  buildMenuTree(list: any, parentId = 0) {
    return list?.filter((item: any) => item.parentId === parentId)
      .map((item: any) => ({
        ID: item.id, title: item.title, icon: item.icon, routerLink: item.routerLink, ParentID: item.parentId,
        subMenuItems: this.buildMenuTree(list, item.id)
      }));
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
