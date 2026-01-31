import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagingReportsService {

  constructor(private http: HttpClient) { }

  GetAllImagingReports(): Observable<any> {
    return this.http.get<any>('json/db-data/imaging-reports.json')
  }
}
