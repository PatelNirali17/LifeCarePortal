import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicianAssignmentService {

  constructor(private http: HttpClient) { }

  GetAllTechnicianAssignment(): Observable<any> {
    return this.http.get<any>('json/db-data/technician-assignment.json')
  }
}
