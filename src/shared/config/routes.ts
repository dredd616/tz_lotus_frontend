export const ROUTES = {
  USERS: {
    build: () => '/users',
    path: '/users',
    name: 'users',
  },
  TRADES: {
    build: () => '/trades',
    path: '/trades',
    name: 'trades',
  },
  TRADE: {
    build: (id: string) => `/trades/${id}`,
    path: '/trades/:id',
    name: 'trade',
  },
};
