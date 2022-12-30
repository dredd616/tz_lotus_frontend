import React, { FC } from 'react';
import { User, useGetUsers } from '@entities/users';
import { RenderRemote } from 'remote-data-react-query/lite';
import { Loader } from '@shared/ui';
import { SUserWrapper, SUsersListWrapper, STitle, SUsersList } from './users-list.styles'

export const UsersList: FC = () => {
  const remoteUsers = useGetUsers();

  return (
          <RenderRemote
              data={remoteUsers}
              success={(users) => (
                  <SUsersListWrapper>
                      {
                          users.length ? <>
                              <STitle>Список пользователей</STitle>
                              <SUsersList>
                                  {users.map((user) => (
                                      <SUserWrapper key={user.id}>
                                          <User key={user.id} id={user.id} name={user.name} />
                                      </SUserWrapper>
                                  ))}
                              </SUsersList>
                          </> : <STitle>Список пользователей пуст</STitle>
                      }
                  </SUsersListWrapper>
              )}
              pending={<Loader color="#6e7aac"/>}
          />
  );
};
