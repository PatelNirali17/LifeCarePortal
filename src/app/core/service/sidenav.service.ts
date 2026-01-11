import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private http : HttpClient) { }

  GetSideMenuList():Observable<any>{
    return this.http.get<any>('json/side-menu.json')
  }


}
