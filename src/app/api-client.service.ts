import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private apiUrl = 'https://rickandmortyapi.com/api'
  
  constructor(public http: HttpClient) {}

  obtenerData(): Observable<any> {
    const url = `${this.apiUrl}/character/?page=7`
    return this.http.get(url)
  }

  obtenerDetailById(id: string): Observable<any> {
    const url = `${this.apiUrl}/character/${id}`
    return this.http.get(url);
  }

  obtenerDetailSearch(spec: string): Observable<any> {
    const url = `${this.apiUrl}/character/?${spec}`
    return this.http.get(url)
  }
}
