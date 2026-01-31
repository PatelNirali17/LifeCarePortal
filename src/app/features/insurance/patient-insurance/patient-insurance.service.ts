import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientInsuranceService {

  constructor(private http: HttpClient) { }

  GetAllPatientInsurance(): Observable<any> {
    return this.http.get<any>('json/db-data/patient-insurance.json')
  }
}
