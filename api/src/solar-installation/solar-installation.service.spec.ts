import { Test, TestingModule } from '@nestjs/testing'
import { SolarInstallationService } from './solar-installation.service'

describe('SolarInstallationService', () => {
  let service: SolarInstallationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolarInstallationService]
    }).compile()

    service = module.get<SolarInstallationService>(SolarInstallationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
