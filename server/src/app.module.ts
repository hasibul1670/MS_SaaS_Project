import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from './dbConfig/config';
import { LoggerMiddleware } from './helpers/logger/logger.middleware';
import { ProductModule } from './product/product.module';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';
import { DatabaseServiceModule } from './database-service/database-service.module';
import { BillModule } from './bill/bill.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    ProductModule,
    TenantModule,
    UserModule,
    TenantModule,
    AuthModule,
    DatabaseServiceModule,
    BillModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
