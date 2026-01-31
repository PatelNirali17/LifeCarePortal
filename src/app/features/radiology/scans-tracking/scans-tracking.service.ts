import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScansTrackingService {

  constructor(private http: HttpClient) { }

  GetAllScansTracking(): Observable<any> {
    return this.http.get<any>('json/db-data/scans-tracking.json')
  }
}
