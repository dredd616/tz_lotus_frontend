import React, { FC, PropsWithChildren, useMemo } from 'react';
import { ROUTES } from '@shared/config';
import { useNavigate } from 'react-router-dom';
import { TAppLayout } from './app-layout.types';
import { SAppLayout, SContent, SSidebar, SSidebarTitle, SNavItem } from './app-layout.styles';

export const AppLayout: FC<PropsWithChildren & TAppLayout> = ({ children, activeRouteName }) => {
  const navigate = useNavigate();

  const navigationItems = useMemo(
    () => [
      {
        id: ROUTES.USERS.name,
        href: ROUTES.USERS.build(),
        label: 'Пользователи',
        active: activeRouteName === ROUTES.USERS.name,
        onClick: () => {
          navigate(ROUTES.USERS.build());
        },
      },
      {
        id: ROUTES.TRADES.name,
        href: ROUTES.TRADES.build(),
        label: 'Трейды',
        active: activeRouteName === ROUTES.TRADES.name,
        onClick: () => {
          navigate(ROUTES.TRADES.build());
        },
      },
    ],
    [activeRouteName, navigate],
  );

  return (
    <SAppLayout>
      <SSidebar>
          <SSidebarTitle>
              TZ Lotus
          </SSidebarTitle>
        {navigationItems.map((item) => (
          <SNavItem key={item.id} $active={item.active} onClick={item.onClick}>
            {item.label}
          </SNavItem>
        ))}
      </SSidebar>
      <SContent>{children}</SContent>
    </SAppLayout>
  );
};
