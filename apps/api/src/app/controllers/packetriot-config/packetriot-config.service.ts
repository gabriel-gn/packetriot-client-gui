import { Injectable, NotFoundException } from '@nestjs/common';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable()
export class PacketriotConfigService {
  constructor() {
  }

  public getConfigFile(): Observable<any> {
    const filePath = "/Usersa/ggn/Desktop/packetriot-client-gui/packetriot_volume/config.json";
    try {
      return of(require(filePath));
    } catch(e) {
      return throwError(() => new NotFoundException('Config Not Found'));
    }
  }

  // public hasConfigFile(): Observable<boolean> {
  //   return this.getConfigFile()
  //   .pipe(
  //     map(config => {
  //       if (!!config) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     })
  //   )
  //   ;
  // }
}
