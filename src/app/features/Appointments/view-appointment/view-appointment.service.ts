import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentService {

 constructor(private http : HttpClient) { }

  GetAllAppointment():Observable<any>{
    return this.http.get<any>('json/db-data/all-appointment.json')
  }
}
