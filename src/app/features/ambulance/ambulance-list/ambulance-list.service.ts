import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceListService {

  constructor(private http: HttpClient) { }

  getAmbulanceList(): Observable<any> {
    return this.http.get('json/db-data/ambulance-list.json');
  }
}
