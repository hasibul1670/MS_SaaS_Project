import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { model } from 'mongoose';
import { Admin } from 'src/modules/admin/schema/admin.schema';
import { CreateUserDto } from '../dto/create-user.dto';

@Schema()
export class User extends Admin implements CreateUserDto {}
export const UserSchema = SchemaFactory.createForClass(User);
export const UserModel = model<CreateUserDto>('User', UserSchema);
