/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtTokenGeneratorService } from 'src/helpers/JwtTokenGeneratorService/JwtTokenGeneratorService';
import { bcryptPasword } from 'src/helpers/bcryptPasword/bcryptPasword';
import { ApiError } from 'src/helpers/utills/ApiError';
import { AdminModel } from '../admin/schema/admin.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: bcryptPasword,
    private readonly jwtTokenService: JwtTokenGeneratorService,
  ) {}
  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const admin = await AdminModel.findOne({ email: email }).populate(
      'tenantId',
    );
    if (
      !admin ||
      !(await this.passwordService.comparePasswords(password, admin.password))
    ) {
      throw ApiError(
        HttpStatus.UNAUTHORIZED,
        'Invalid credentials',
        'Invalid credentials',
      );
    }
    const { password: _, ...adminWithoutPassword } = admin.toObject();

    const payload = { ...adminWithoutPassword };
    const accessToken = this.jwtTokenService.generateAccessToken(payload);
    const refreshToken = this.jwtTokenService.generateRefreshToken(payload);

    return {
      admin: adminWithoutPassword,
      accessToken,
      refreshToken,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    console.log('🚀 ~ AuthService ~ update ~ UpdateAuthDto:', updateAuthDto);

    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
