import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurgeryRecordsService {

  constructor(private http: HttpClient) { }

  GetAllSurgeryRecords(): Observable<any> {
    return this.http.get<any>('json/db-data/surgery-records.json')
  }
}
