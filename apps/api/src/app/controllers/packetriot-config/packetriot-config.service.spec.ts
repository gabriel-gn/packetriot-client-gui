import { Test, TestingModule } from '@nestjs/testing';
import { PacketriotConfigService } from './packetriot-config.service';

describe('ConfigService', () => {
  let service: PacketriotConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacketriotConfigService],
    }).compile();

    service = module.get<PacketriotConfigService>(PacketriotConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
