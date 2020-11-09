import { Users } from './user.entity';
export const usersProviders = [
    {
      provide: 'USERS_REPOSITORY',
      useValue: Users ,
    },
  ];