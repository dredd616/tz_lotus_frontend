import { Users } from '@shared/api/schema';

export type TUserService = {
  getAll: () => Promise<Users.GetUsers.ResponseBody['data']>;
  create: (params: Users.CreateUser.RequestBody) => Promise<Users.CreateUser.ResponseBody['data']>;
};
