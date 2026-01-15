import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthRecordsService {
  
  constructor(private http: HttpClient) { }

  GetAllBirthRecords(): Observable<any> {
    return this.http.get<any>('json/db-data/birth-records.json')
  }
}
