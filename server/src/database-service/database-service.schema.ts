import { HttpStatus } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiError } from '../helpers/utills/ApiError';
import { TenantModel } from './database-service.model';
import { CreateTenantDto } from './dto/databse-service.dto';
import { BillingInfo, CompanyInfo } from './entities/database-service.entity';

@Schema()
export class Tenant extends Document implements CreateTenantDto {
  @Prop({ type: String, required: true })
  tenantId: string;

  @Prop({ type: [CompanyInfo], required: true })
  companyInfo: CompanyInfo;

  @Prop({ type: Boolean, required: true })
  activeStatus: boolean;

  @Prop({
    type: String,
    required: true,
    enum: ['free', 'basic', 'premium', 'enterprise'],
  })
  subscriptionPlan: 'free' | 'basic' | 'premium' | 'enterprise';

  @Prop({ type: BillingInfo, required: true })
  billingInfo: BillingInfo;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);

TenantSchema.pre('save', async function (next) {
  try {
    const existingTenant = await TenantModel.findOne({
      tenantId: this.tenantId,
    });
    if (existingTenant) {
      throw ApiError(
        HttpStatus.CONFLICT,
        `This Tenant Already Exists: '${this.tenantId}'`,
        'This Tenant Already Exist',
      );
    }

    next();
  } catch (error) {
    next(error);
  }
});
