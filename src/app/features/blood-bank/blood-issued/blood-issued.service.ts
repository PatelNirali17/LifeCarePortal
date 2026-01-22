import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodIssuedService {

  constructor(private http: HttpClient) { }

  GetAllBloodIssued(): Observable<any> {
    return this.http.get<any>('json/db-data/blood-issue.json')
  }
}
