import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStaffService {

 constructor(private http : HttpClient) { }

  GetAlStaff():Observable<any>{
    return this.http.get<any>('json/db-data/all-staff.json')
  }
}
