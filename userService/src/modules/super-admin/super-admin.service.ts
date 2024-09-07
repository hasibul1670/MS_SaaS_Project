import { Injectable } from '@nestjs/common';
import { bcryptPasword } from 'src/helpers/bcryptPasword/bcryptPasword';
import { CreateSuperAdminDto } from './dto/create-super-admin.dto';
import { UpdateSuperAdminDto } from './dto/update-super-admin.dto';
import { SuperAdminModel } from './schema/super-admin.schema';

@Injectable()
export class SuperAdminService {
  constructor(private readonly passwordService: bcryptPasword) {}
  async create(createSuperAdminDto: CreateSuperAdminDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      createSuperAdminDto.password,
    );
    const superAdminData = {
      ...createSuperAdminDto,
      password: hashedPassword,
    };
    const res = await SuperAdminModel.create(superAdminData);
    return res;
  }

  findAll() {
    return `This action returns all superAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} superAdmin`;
  }

  update(id: number, updateSuperAdminDto: UpdateSuperAdminDto) {
    const h21 = updateSuperAdminDto;
    return h21;
  }

  remove(id: number) {
    return `This action removes a #${id} superAdmin`;
  }
}
