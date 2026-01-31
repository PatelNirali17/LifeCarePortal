import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostOpNotesService {

  constructor(private http: HttpClient) { }

  GetAllPostOpNotes(): Observable<any> {
    return this.http.get<any>('json/db-data/post-op-notes.json')
  }
}
