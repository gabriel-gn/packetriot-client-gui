import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    private http: HttpClient
  ) { }

  public algoae(): Observable<any> {
    return this.http.get('http://localhost:3333/api/hello');
  }
}
