import React, { FC } from 'react';
import { TUser } from './user.types';
import { SUser, STitle } from './user.styles';

export const User: FC<TUser> = ({ selected, name, onClick }) => (
  <SUser onClick={onClick} $selected={selected}>
    <STitle>
      {name}
    </STitle>
  </SUser>
);
