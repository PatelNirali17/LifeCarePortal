import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimStatusService {

  constructor(private http: HttpClient) { }

  GetAllClaimStatus(): Observable<any> {
    return this.http.get<any>('json/db-data/claim-status.json')
  }
}
