import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import config from './dbConfig/config';
import { LoggerMiddleware } from './helpers/logger/logger.middleware';
import { RolesGuard } from './helpers/roleGuard/roles.guard';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { BillModule } from './modules/bill/bill.module';
import { DatabaseServiceModule } from './modules/database-service/database-service.module';
import { FeaturesModule } from './modules/features/features.module';
import { ProductModule } from './modules/product/product.module';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { UserModule } from './modules/user/user.module';
import { LocationModule } from './modules/location/location.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET || '454ffdf4df5df13d23',
      signOptions: { expiresIn: '60m' },
    }),

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
    SuperAdminModule,
    AdminModule,
    FeaturesModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [RolesGuard],
  exports: [JwtModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
