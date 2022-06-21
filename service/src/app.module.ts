import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

// ---

import configuration from './common/config'
import { TypeOrmConfigService } from './common/db'
import { ProductModule } from './product/product.module'
import { ProjectModule } from './project/project.module'
import { CustomerModule } from './customer/customer.module'
import { OrderToManufactorModule } from './order-to-manufactor/order-to-manufactor.module';

// ---

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    CustomerModule,
    ProductModule,
    ProjectModule,
    OrderToManufactorModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
