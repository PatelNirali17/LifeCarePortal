import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypesService {

  constructor(private http: HttpClient) { }

  GetAllLeaveTypes(): Observable<any> {
    return this.http.get<any>('json/db-data/leave-type.json')
  }
}
