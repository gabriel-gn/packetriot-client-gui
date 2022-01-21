import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { PacketriotConfigModule } from './controllers/packetriot-config/packetriot-config.module';

@Module({
  imports: [
    PacketriotConfigModule,
    RouterModule.register([
      {
        path: "config",
        module: PacketriotConfigModule
      }
    ])
  ]
})
export class AppRoutingModule {
}
