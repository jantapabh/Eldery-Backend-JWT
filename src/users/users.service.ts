import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create_user(user: any) {
    let result = [];
    if (user.username.length < 4) {
      result.push({ Alert_username: 'username must be longer than 4' })
      // return { message: 'username must be longer than 4' };
    }
    if (user.password.length < 6) {
      result.push({ Alert_password: 'password must be longer than 6' })
      // return { message: 'password must be longer than 6' };
    }
    return result;

  }


}