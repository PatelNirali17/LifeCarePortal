import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestCatalogService {

  constructor(private http: HttpClient) { }

  GetAllTestCatalog(): Observable<any> {
    return this.http.get<any>('json/db-data/test-catalog.json')
  }
}
