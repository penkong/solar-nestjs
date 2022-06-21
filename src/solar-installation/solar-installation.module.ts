import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// ---

import { SolarInstallationService } from './solar-installation.service'
import { SolarInstallation } from './entities/solar-installation.entity'
import { SolarInstallationController } from './solar-installation.controller'

// ---

@Module({
  // imports: [TypeOrmModule.forFeature([SolarInstallation])],
  controllers: [SolarInstallationController],
  providers: [SolarInstallationService]
})
export class SolarInstallationModule {}
