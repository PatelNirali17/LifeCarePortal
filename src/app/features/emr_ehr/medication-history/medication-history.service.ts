import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationHistoryService {

  constructor(private http: HttpClient) { }

  GetAllMedicationHistory(): Observable<any> {
    return this.http.get<any>('json/db-data/medication-history.json')
  }
}
