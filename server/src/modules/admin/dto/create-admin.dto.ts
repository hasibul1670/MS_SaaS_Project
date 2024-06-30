import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'userName must be a string' })
  @IsNotEmpty({ message: 'userName is required' })
  userName: string;

  @IsString({ message: 'password  must be a string' })
  @IsNotEmpty({ message: 'password  is required' })
  password: string;

  @IsMongoId({ message: 'tenantId must be a valid MongoDB ObjectId' })
  @IsNotEmpty({ message: 'tenantId is required' })
  tenantId: string;
}
