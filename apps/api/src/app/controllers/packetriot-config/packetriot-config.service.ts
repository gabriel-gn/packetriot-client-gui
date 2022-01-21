import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { PacketriotConfig } from '@packetriot-client-gui/api-interfaces';

@Injectable()
export class PacketriotConfigService {
  constructor() {
  }

  public getConfigFile(): Observable<PacketriotConfig> {
    const filePath = "/Users/ggn/Desktop/packetriot-client-gui/packetriot_volume/config.json";
    try {
      const requireDynamically = eval('require');
      return of(requireDynamically(filePath));
    } catch(e) {
      Logger.error(e);
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
