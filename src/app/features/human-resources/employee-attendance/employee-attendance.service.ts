import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendanceService {

  constructor(private http: HttpClient) { }

  GetAllEmployeeAttendance(): Observable<any> {
    return this.http.get<any>('json/db-data/employee-attendance.json')
  }
}
