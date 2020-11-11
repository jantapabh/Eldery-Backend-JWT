import { Tokens, Users } from './user.entity';
export const usersProviders = [
    {
      provide: 'USERS_REPOSITORY',
      useValue: Users ,
    },
    {
      provide: 'TOKENS_REPOSITORY',
      useValue: Tokens ,
    },
  ];