import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDocumentsService {

  constructor(private http: HttpClient) { }

  GetAllPatientDocuments(): Observable<any> {
    return this.http.get<any>('json/db-data/patient-documents.json')
  }
}
