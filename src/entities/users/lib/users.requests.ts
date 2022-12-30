import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User, Users } from '@shared/api/schema';
import { usersService } from '@entities/users';
import { RemoteData } from 'remote-data-react-query/lite';

export const useGetUsers = (): RemoteData<Error, User[]> =>
  useQuery<unknown, Error, User[]>(['all-users'], () => usersService.getAll());

export const useCreateUser = () => {
  const client = useQueryClient();
  return useMutation<User, Error, Users.CreateUser.RequestBody>({
    mutationKey: ['create-user'],
    mutationFn: usersService.create,
    onSuccess: () => client.invalidateQueries(['all-users']),
  });
};
