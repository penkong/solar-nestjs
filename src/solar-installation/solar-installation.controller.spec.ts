import { Test, TestingModule } from '@nestjs/testing';
import { SolarInstallationController } from './solar-installation.controller';
import { SolarInstallationService } from './solar-installation.service';

describe('SolarInstallationController', () => {
  let controller: SolarInstallationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolarInstallationController],
      providers: [SolarInstallationService],
    }).compile();

    controller = module.get<SolarInstallationController>(SolarInstallationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
