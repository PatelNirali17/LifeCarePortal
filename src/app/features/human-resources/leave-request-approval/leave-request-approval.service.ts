import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestApprovalService {

  constructor(private http: HttpClient) { }

  GetAllLeaveRequestsApproval(): Observable<any> {
    return this.http.get<any>('json/db-data/leave-request.json')
  }
}
