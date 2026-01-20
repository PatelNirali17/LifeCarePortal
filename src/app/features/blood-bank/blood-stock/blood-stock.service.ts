import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodStockService {

  constructor(private http: HttpClient) { }

  GetAllBloodStock(): Observable<any> {
    return this.http.get<any>('json/db-data/blood-stock.json')
  }
}
