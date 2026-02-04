import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveBalanceService {

  constructor(private http: HttpClient) { }

  GetAllLeaveBalance(): Observable<any> {
    return this.http.get<any>('json/db-data/leave-balance.json')
  }
}
