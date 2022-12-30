import React, { FC, PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => (
  <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
);
