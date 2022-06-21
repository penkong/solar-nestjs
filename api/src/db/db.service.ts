import { ConfigService } from '@nestjs/config'
import { Injectable, Inject } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'

// ---

import { IPgDBConfig } from 'src/config'

// ---

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    //

    const { type, host, port, database, username, password } =
      this.config.get<IPgDBConfig>('DATABASE')

    const env = this.config.get('ENV')

    console.log(this.config.get('DATABASE'))

    return {
      type,
      host,
      port,
      database,
      username,
      password,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      autoLoadEntities: true,
      synchronize: env === 'development'
    }
  }
}
