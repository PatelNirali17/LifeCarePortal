import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  GetAllIncome(): Observable<any> {
    return this.http.get<any>('json/db-data/income.json')
  }
}
