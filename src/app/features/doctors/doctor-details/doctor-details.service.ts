import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {

  constructor(private http: HttpClient) { }

  GetAllDoctorDetails(): Observable<any> {
    return this.http.get<any>('json/db-data/doctor-details.json')
  }
}
