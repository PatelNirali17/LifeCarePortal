import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicalNotesService {

  constructor(private http: HttpClient) { }

  GetAllClinicalNotes(): Observable<any> {
    return this.http.get<any>('json/db-data/clinical-notes.json')
  }
}
