import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

// ---

import configuration from './config'
import { TypeOrmConfigService } from './db'
import { SolarInstallationModule } from './solar-installation'

// ---

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    SolarInstallationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
