import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { createApiResponse } from 'src/helpers/utills/common-response';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin-login')
  async create(
    @Body() loginAuthDto: LoginAuthDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const data = await this.authService.login(loginAuthDto);
    const { refreshToken, accessToken, admin } = data;

    // res.cookie('refreshToken', refreshToken, { httpOnly: true, path: '/' });

    response.cookie('refresh_token', refreshToken, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
      maxAge: 150 * 24 * 60 * 60 * 1000, // 1 week
    });

    return createApiResponse(
      'success',
      200,
      'Admin is logged in successfully.',
      { accessToken, admin },
    );
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
