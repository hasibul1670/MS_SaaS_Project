import { HttpStatus } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';
import { ApiError } from '../../../helpers/utills/ApiError';
import { CreateSuperAdminDto } from './../dto/create-super-admin.dto';

@Schema()
export class SuperAdmin extends Document implements CreateSuperAdminDto {
  @Prop({ type: String })
  firstName: string;
  @Prop({ type: String })
  lastName: string;
  @Prop({ type: String })
  email: string;
  @Prop({ type: String, required: true })
  phoneNumber: string;
  @Prop({ type: String, default: 'admin' })
  password: string;
  @Prop({ type: Boolean })
  isActive: boolean;
  @Prop({ type: String, required: true })
  profilePicture: string;
  @Prop({ type: String, default: 'superAdmin' })
  role: string;
}

export const SuperAdminSchema = SchemaFactory.createForClass(SuperAdmin);

SuperAdminSchema.pre('save', async function (next) {
  try {
    const existingAdmin = await SuperAdminModel.findOne({
      $or: [{ email: this.email }, { firstName: this.firstName }],
    });
    if (existingAdmin) {
      throw ApiError(
        HttpStatus.CONFLICT,
        `A Super Admin with this email or username already exists: '${this.email}' or '${this.firstName}'`,
        'This Super Admin Already Exists',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
});

export const SuperAdminModel = model<CreateSuperAdminDto>(
  'SuperAdmin',
  SuperAdminSchema,
);
