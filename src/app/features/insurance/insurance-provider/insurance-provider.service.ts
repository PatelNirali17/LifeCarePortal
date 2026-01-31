import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceProviderService {

 constructor(private http: HttpClient) { }

  GetAllInsuranceProvider(): Observable<any> {
    return this.http.get<any>('json/db-data/insurance-provider.json')
  }
}
