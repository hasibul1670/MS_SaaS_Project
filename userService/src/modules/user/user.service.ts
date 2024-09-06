import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApiError } from 'src/helpers/utills/ApiError';
import { findUnique } from 'src/helpers/utills/findUnique';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private UserModel: Model<User>) {}

  async create(createUserDto: CreateAdminDto) {
    await findUnique(this.UserModel, 'email', createUserDto.email);
    try {
      return await this.UserModel.create(createUserDto);
    } catch (error) {
      ApiError(400, 'error', error.message);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('🚀 ~ UserService ~ update ~ updateUserDto:', updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
