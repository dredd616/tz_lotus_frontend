import React, { FC } from 'react';
import { UsersList, CreateUser } from '@widgets/users';
import { SUsersPage } from './users.page.styles'

export const UsersPage: FC = () => (
  <SUsersPage>
    <CreateUser />
    <UsersList />
  </SUsersPage>
);
