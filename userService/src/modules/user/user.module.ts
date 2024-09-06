import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { TenantsMiddleware } from 'src/middleware/tenants.middleware';
import { tenantModels } from 'src/providers/tenant-models.provider';
import { RolesGuard } from '../../helpers/roleGuard/roles.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    UserService,
    JwtService,
    tenantModels.userModel,
  ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(UserController);
  }
}
