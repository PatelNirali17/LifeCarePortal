import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllotRoomService {

  constructor(private http: HttpClient) { }

  GetAllotments(): Observable<any> {
    return this.http.get<any>('json/db-data/allot-room.json');
  }

  GetAllotmentById(id: string): Observable<any> {
    // For the static JSON mock we fetch all and filter client-side
    return new Observable(observer => {
      this.GetAllotments().subscribe({
        next: (list: any[]) => {
          const item = list.find(x => x.allotmentId === id);
          observer.next(item);
          observer.complete();
        },
        error: err => observer.error(err)
      })
    })
  }

  AddAllotment(model: any): Observable<any> {
    // Mock: return the model as if saved. Replace with POST to real API when available.
    return of(model);
  }

  UpdateAllotment(id: string, model: any): Observable<any> {
    // Mock update — return updated model
    return of(model);
  }

  DeleteAllotment(id: string): Observable<any> {
    // Mock delete — return success
    return of({ success: true, id });
  }
}
