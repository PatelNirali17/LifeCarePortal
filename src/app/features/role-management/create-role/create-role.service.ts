import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRoleService {
  baseurl = environment.baseUrl.concat('/api/v1.0/role/')

  constructor(private http: HttpClient) { }

  GetAllRole(): Observable<any> {
    return this.http.get<any>(this.baseurl + 'getallrole/')
  }

  SaveRoleDetails(model: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseurl + 'createrole/', model, httpOptions)
  }

  UpdateRoleDetails(model: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseurl + 'updaterole/' + model.id, model, httpOptions)
  }
  DeleteRole(id: any): Observable<any> {
    return this.http.get<any>(this.baseurl + 'deleterole/' + id)
  }
}
