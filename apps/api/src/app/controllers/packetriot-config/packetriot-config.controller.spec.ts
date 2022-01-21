import { Test, TestingModule } from '@nestjs/testing';
import { PacketriotConfigController } from './packetriot-config.controller';

describe('ConfigController', () => {
  let controller: PacketriotConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacketriotConfigController],
    }).compile();

    controller = module.get<PacketriotConfigController>(PacketriotConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
