import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  user = [];

  getAllUsers() {
    return this.user;
  }
  createUser(user) {
    this.user.push(user);
  }
}
