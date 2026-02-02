import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationListService {

  constructor(private http: HttpClient) { }

  GetAllDesignationList(): Observable<any> {
    return this.http.get<any>('json/db-data/designation-list.json')
  }
}
