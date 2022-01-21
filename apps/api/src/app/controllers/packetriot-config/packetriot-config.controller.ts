import { Controller, Get } from '@nestjs/common';
import { PacketriotConfigService } from './packetriot-config.service';

@Controller('') // já definido no app.routing!! Deixar vazio
export class PacketriotConfigController {

  constructor(
    private readonly packetriotConfigService: PacketriotConfigService
  ) {}

  @Get('')
  async getConfig() {
    return this.packetriotConfigService.getConfigFile();
  }
}
