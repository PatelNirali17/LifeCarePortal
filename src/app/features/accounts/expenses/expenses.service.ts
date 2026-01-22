import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  GetAllExpenses(): Observable<any> {
    return this.http.get<any>('json/db-data/expenses.json')
  }
}
