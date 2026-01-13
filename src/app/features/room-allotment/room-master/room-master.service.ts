import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomMasterService {

  constructor(private http: HttpClient) { }

  GetRoomMaster(): Observable<any> {
    return this.http.get<any>('json/db-data/room-master.json')
  }

  GetRoomType(): Observable<any> {
    return this.http.get<any>('json/db-data/room-types.json')
  }

  GetWardList(): Observable<any> {
    return this.http.get<any>('json/db-data/ward-list.json')
  }
}
