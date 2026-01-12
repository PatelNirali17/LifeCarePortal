import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleAssignService {
  baseurl = environment.baseUrl.concat('/api/v1.0/role/')
  userbaseurl = environment.baseUrl.concat('/api/v1.0/user/')

  constructor(private http: HttpClient) { }

  // GetAllRoleAssign(): Observable<any> {
  //   return this.http.get<any>(this.baseurl + 'getallroleassign/')
  // }

  GetAllRoleAssign(): Observable<any> {
    return this.http.get<any>('json/db-data/role-assign.json')
  }

  // GetAllRole(): Observable<any> {
  //   return this.http.get<any>(this.baseurl + 'getallrole/')
  // }

  GetAllRole(): Observable<any> {
    return this.http.get<any>('json/db-data/role.json')
  }

  // GetAllUser(): Observable<any> {
  //   return this.http.get<any>(this.userbaseurl + 'getalluser/')
  // }

  GetAllUser(): Observable<any> {
    return this.http.get<any>('json/db-data/users.json')
  }

  SaveRoleAssignDetails(model: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseurl + 'addroleassign/', model, httpOptions)
  }

  UpdateRoleAssignDetails(model: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseurl + 'updateroleassign/' + model.id, model, httpOptions)
  }
}
