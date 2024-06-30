import { HttpStatus } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, model } from 'mongoose';
import { ApiError } from 'src/helpers/utills/ApiError';
import { CreateAdminDto } from '../dto/create-admin.dto';

@Schema()
export class Admin extends Document implements CreateAdminDto {
  @Prop({ type: String, required: true })
  userName: string;
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: String, required: true })
  password: string;
  @Prop({ type: Types.ObjectId, ref: 'Tenant', required: true })
  tenantId: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

AdminSchema.pre('save', async function (next) {
  try {
    const existingAdmin = await AdminModel.findOne({
      $or: [{ email: this.email }, { userName: this.userName }],
    });
    if (existingAdmin) {
      throw ApiError(
        HttpStatus.CONFLICT,
        `An Admin with this email or username already exists: '${this.email}' or '${this.userName}'`,
        'This Admin Already Exists',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
});

export const AdminModel = model<CreateAdminDto>('Admin', AdminSchema);
