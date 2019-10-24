import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from './part.interface';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>('api/globalparts');
  }

  getPart(id): Observable<Part> {
    return this.http.get<Part>(`/api/globalparts/${id}`);
  }
}
