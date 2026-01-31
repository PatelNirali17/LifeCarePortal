import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreOpAssessmentService {

  constructor(private http: HttpClient) { }

  GetAllPreOpAssessment(): Observable<any> {
    return this.http.get<any>('json/db-data/pre-op-assessment.json')
  }
}
