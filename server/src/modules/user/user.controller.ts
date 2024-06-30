import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create-user')
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }
  @Get('all-user')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
