import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http$: HttpClient) {}

  protected get<R>(
    url: string,
    params: HttpParams = new HttpParams()
  ): Observable<R> {
    return this.http$.get<R>(`${url}`, { params });
  }
}
