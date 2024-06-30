import { Global, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { tenantConnectionProvider } from 'src/providers/tenant-connection.provider';
import { Tenant, TenantSchema } from './tenant.model';
import { TenantsService } from './tenant.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tenant.name,
        schema: TenantSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [TenantsService, tenantConnectionProvider],
  exports: [TenantsService, tenantConnectionProvider],
})
export class TenantModule {}
