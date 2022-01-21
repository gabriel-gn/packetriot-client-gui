import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { PacketriotConfigController } from './packetriot-config.controller';
import { PacketriotConfigService } from './packetriot-config.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [
    PacketriotConfigController
  ],
  providers: [
    PacketriotConfigService,
  ]
})
export class PacketriotConfigModule {
}
