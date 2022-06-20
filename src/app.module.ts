import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

// ---

import configuration from './config'
import { SolarInstallationModule } from './solar-installation/'

// ---

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      // entities: [SolarInstallation],
      autoLoadEntities: true,
      synchronize: true
    }),
    SolarInstallationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
