import { TUserService } from '@entities/users/model';
import { instance } from '@shared/api';
import { Users } from '@shared/api/schema';

export const usersService: TUserService = {
  getAll: () =>
    instance.get<Users.GetUsers.ResponseBody>('users').then((response) => response.data.data),
  create: (params: Users.CreateUser.RequestBody) =>
    instance
      .post<Users.CreateUser.ResponseBody>('users', params)
      .then((response) => response.data.data),
};
