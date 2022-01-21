import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PacketriotConfig } from '@packetriot-client-gui/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getConfigFile(): Observable<PacketriotConfig> {
    return this.http.get<PacketriotConfig>(`${environment.backendUrl}/api/config`);
  }
}
