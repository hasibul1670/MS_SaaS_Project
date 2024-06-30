import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Tenant } from './tenant.model';

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel(Tenant.name)
    private TenantModel: Model<Tenant>,
  ) {}

  async getTenantById(tenantId: string) {
    return this.TenantModel.findOne({ tenantId });
  }
}
