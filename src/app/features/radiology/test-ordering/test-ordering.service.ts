import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestOrderingService {

  constructor(private http: HttpClient) { }

  GetAllTestOrdering(): Observable<any> {
    return this.http.get<any>('json/db-data/test-ordering.json')
  }
}
