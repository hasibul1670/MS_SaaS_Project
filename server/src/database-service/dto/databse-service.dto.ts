import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class CompanyInfoDto {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Phone must be a string' })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsString({ message: 'Company name must be a string' })
  @IsNotEmpty({ message: 'Company name is required' })
  companyName: string;

  @IsString({ message: 'Company title must be a string' })
  @IsNotEmpty({ message: 'Company title is required' })
  companyTitle: string;

  @IsString({ message: 'Address must be a string' })
  address: string;

  @IsString({ message: 'Country must be a string' })
  country: string;
}

class BillingInfoDto {
  @IsString({ message: 'Payment by must be a string' })
  @IsNotEmpty({ message: 'Payment by is required' })
  paymentBy: string;

  @IsString({ message: 'Payment method must be a string' })
  @IsNotEmpty({ message: 'Payment method is required' })
  paymentMethod: string;

  @IsNumber({}, { message: 'Payment amount must be a number' })
  @IsNotEmpty({ message: 'Payment amount is required' })
  paymentAmount: number;

  @IsString({ message: 'Payment date must be a string' })
  @IsNotEmpty({ message: 'Payment date is required' })
  paymentDate: string;

  @IsString({ message: 'Payment status must be a string' })
  @IsNotEmpty({ message: 'Payment status is required' })
  paymentStatus: string;
}

export class CreateTenantDto {
  @IsString({ message: 'Tenant ID must be a string' })
  @IsNotEmpty({ message: 'Tenant ID is required' })
  tenantId: string;

  @ValidateNested({ each: true })
  @Type(() => CompanyInfoDto)
  companyInfo: CompanyInfoDto;

  @IsBoolean({ message: 'Active status must be a boolean' })
  activeStatus: boolean;

  @IsEnum(['free', 'basic', 'premium', 'enterprise'], {
    message:
      'Subscription plan must be one of: free, basic, premium, enterprise',
  })
  subscriptionPlan: 'free' | 'basic' | 'premium' | 'enterprise';

  @ValidateNested()
  @Type(() => BillingInfoDto)
  billingInfo: BillingInfoDto;
}
