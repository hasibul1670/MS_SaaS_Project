import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenGeneratorService } from '../../helpers/JwtTokenGeneratorService/JwtTokenGeneratorService';
import { bcryptPasword } from '../../helpers/bcryptPasword/bcryptPasword';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, bcryptPasword, JwtService, JwtTokenGeneratorService],
})
export class AuthModule {}
