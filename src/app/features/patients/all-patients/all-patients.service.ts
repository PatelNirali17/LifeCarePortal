import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPatientsService {

   constructor(private http: HttpClient) { }

  GetAllPatients(): Observable<any> {
    return this.http.get<any>('json/db-data/all-Patient.json')
  }
}
