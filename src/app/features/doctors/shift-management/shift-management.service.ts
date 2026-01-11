import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftManagementService {

  constructor(private http: HttpClient) { }

  GetAllShiftManagement(): Observable<any> {
    return this.http.get<any>('json/db-data/shift-management.json')
  }
}
