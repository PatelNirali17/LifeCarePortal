import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeathRecordsService {

  constructor(private http: HttpClient) { }

  GetAllDeathRecords(): Observable<any> {
    return this.http.get<any>('json/db-data/death-records.json')
  }
}
