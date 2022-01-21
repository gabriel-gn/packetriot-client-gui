import { Injectable } from '@nestjs/common';
import { from, map, Observable, of } from 'rxjs';

@Injectable()
export class PacketriotConfigService {
  constructor() {
  }

  public getConfigFile(): Observable<any> {
    try {
      return of(require("/Users/ggn/Desktop/packetriot-client-gui/packetriot_volume/config.json"));
    } catch (e) {
      return of(undefined);
    }
  }

  public hasConfigFile(): Observable<boolean> {
    return this.getConfigFile()
    .pipe(
      map(config => {
        if (!!config) {
          return true
        } else {
          return false
        }
      })
    )
    ;
  }
}
