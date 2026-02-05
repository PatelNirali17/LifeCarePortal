import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentListService {

  constructor(private http: HttpClient) { }

  GetAllAppointmentList(): Observable<any> {
    return this.http.get<any>('json/db-data/appointment-list.json')
  }

}
