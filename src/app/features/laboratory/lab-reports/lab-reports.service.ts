import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabReportsService {

  constructor(private http: HttpClient) { }

  GetAllLabReports(): Observable<any> {
    return this.http.get<any>('json/db-data/lab-reports.json')
  }
}
