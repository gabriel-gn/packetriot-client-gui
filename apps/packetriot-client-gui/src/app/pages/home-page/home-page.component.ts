import { Component } from '@angular/core';
import { HttpApiService } from '../../services/http-api/http-api.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PacketriotConfig } from '@packetriot-client-gui/api-interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  public configFile: PacketriotConfig | undefined;
  public error: number | undefined;

  constructor(
    private http: HttpApiService
  ) {
    this.getConfigFile().subscribe(response => {
      this.configFile = response;
    })
  }

  getConfigFile(): Observable<PacketriotConfig> {
    return this.http.getConfigFile().pipe(
      map(response => {
        console.log(response);
        return response;
      }),
      catchError(error => {
        this.error = error.status;
        if (error.status == 404) {
          return throwError(() => 'Missing config file');
        } else {
          return throwError(() => 'Unexpected error');
        }
      })
    )
  }

}
