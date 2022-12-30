import { instance, BASE_URL } from '@shared/api';
import { TTradesService } from '@entities/trades/model';
import { Trades } from '@shared/api/schema';

export const tradesService: TTradesService = {
  create: (params: Trades.CreateTrade.RequestBody) =>
    instance
      .post<Trades.CreateTrade.ResponseBody>('trades', params)
      .then((response) => response.data.data),
  getAll: () =>
    instance.get<Trades.GetTrades.ResponseBody>('trades').then((response) => response.data.data),
  get: (id: string) =>
    instance
      .get<Trades.GetTrade.ResponseBody>(`trades/${id}`)
      .then((response) => response.data.data),
  subscribe: (id: string, callback: (data: Trades.SubscribeTrade.ResponseBody) => void) => {
    const source = new EventSource(`${BASE_URL}/trades/subscribe/${id}`);
    const listener = ({ data }: any) => {
      const json = JSON.parse(data);
      callback(json);
    };

    source.addEventListener('message', listener);
    return () => source.removeEventListener('message', listener);
  },
};
