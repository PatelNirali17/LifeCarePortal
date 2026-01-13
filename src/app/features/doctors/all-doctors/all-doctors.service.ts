import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDoctorsService {

  constructor(private http: HttpClient) { }

  GetAllDoctors(): Observable<any> {
    return this.http.get<any>('json/db-data/all-doctors.json')
  }

  GetAllDepartment(): Observable<any> {
    return this.http.get<any>('json/db-data/department-list.json')
  }
}
