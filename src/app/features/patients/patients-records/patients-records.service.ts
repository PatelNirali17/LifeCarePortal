import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsRecordsService {

  constructor(private http: HttpClient) { }

  GetAllPatientsRecords(): Observable<any> {
    return this.http.get<any>('json/db-data/patient-records.json')
  }
}
