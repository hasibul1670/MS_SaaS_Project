import { model } from 'mongoose';
import { TenantSchema } from './database-service.schema';
import { CreateTenantDto } from './dto/databse-service.dto';

export const TenantModel = model<CreateTenantDto>('Tenant', TenantSchema);
