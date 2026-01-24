import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientEncountersService {

  constructor(private http: HttpClient) { }

  GetAllPatientEncounters(): Observable<any> {
    return this.http.get<any>('json/db-data/patient-encounters.json')
  }
}
