import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemStockListService {

  constructor(private http: HttpClient) { }

  GetAllItemStockList(): Observable<any> {
    return this.http.get<any>('json/db-data/item-stock-list.json')
  }
}
