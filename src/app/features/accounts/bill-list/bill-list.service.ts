import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillListService {

  constructor(private http: HttpClient) { }

  GetAllBillList(): Observable<any> {
    return this.http.get<any>('json/db-data/bill-list.json')
  }
}
