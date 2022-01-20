import { Injectable } from '@nestjs/common';
import { Message } from '@packetriot-client-gui/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
