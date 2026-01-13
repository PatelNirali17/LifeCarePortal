import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private UserMenuSubject!: BehaviorSubject<any[]>;
  public UserMenu!: Observable<any[]>;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  public get UserMenuValue(): any {
    if (isPlatformBrowser(this.platformId)) {
      const storedMenu = localStorage.getItem('UserMenu');
      this.UserMenuSubject = new BehaviorSubject<any[]>(storedMenu ? JSON.parse(storedMenu) : {});
      return this.UserMenuSubject.value;
    } else {
      return {};
    }
  }


  GetUserMenu() {
    return firstValueFrom(
      this.http.get('json/side-menu.json')
    ).then(menu => {
      localStorage.setItem('UserMenu', JSON.stringify(menu));
    });
  }





}
