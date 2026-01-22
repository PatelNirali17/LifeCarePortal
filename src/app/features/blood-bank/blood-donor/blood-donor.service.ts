import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodDonorService {

  constructor(private http: HttpClient) { }

  GetAllBloodDonor(): Observable<any> {
    return this.http.get<any>('json/db-data/blood-donor-list.json')
  }
}
