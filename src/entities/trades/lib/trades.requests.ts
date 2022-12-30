import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Trade, Trades } from '@shared/api/schema';
import { tradesService } from '@entities/trades';
import { RemoteData } from 'remote-data-react-query/lite';
import { useEffect, useRef } from 'react';

export const useGetTrades = (): RemoteData<Error, Trade[]> =>
  useQuery<unknown, Error, Trade[]>(['all-trades'], () => tradesService.getAll());

export const useCreateTrade = () => {
  const client = useQueryClient();
  return useMutation<Trade, Error, Trades.CreateTrade.RequestBody>({
    mutationFn: tradesService.create,
    mutationKey: ['create-trade'],
    onSuccess: () => client.invalidateQueries(['all-trades']),
  });
};

export const useTradeSubscription = (id?: string): RemoteData<Error, Trade> => {
  const client = useQueryClient();
  const unsubscribeRef = useRef<(() => void) | null>(null);

  const trade = useQuery<unknown, Error, Trade>(['trade', id], () => tradesService.get(id!), {
    onSuccess: (data) => {
      unsubscribeRef.current?.();

      if (!data.isExpired) {
        unsubscribeRef.current = tradesService.subscribe(id!, (trade) => {
          client.setQueryData(['trade', id], trade);
        });
      }
    },
    enabled: Boolean(id),
  });

  useEffect(
    () => () => {
      unsubscribeRef.current?.();
    },
    [],
  );

  return trade;
};
