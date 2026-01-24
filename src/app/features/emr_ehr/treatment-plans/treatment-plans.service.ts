import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlansService {

  constructor(private http: HttpClient) { }

  GetAllTreatmentPlans(): Observable<any> {
    return this.http.get<any>('json/db-data/treatment-plans.json')
  }
}
