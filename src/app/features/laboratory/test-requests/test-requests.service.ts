import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestRequestsService {

  constructor(private http: HttpClient) { }

  GetAllTestRequests(): Observable<any> {
    return this.http.get<any>('json/db-data/test-requests.json')
  }
}
