import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtInventoryService {

  constructor(private http: HttpClient) { }

  GetAllOtInventory(): Observable<any> {
    return this.http.get<any>('json/db-data/ot-inventory.json')
  }
}
