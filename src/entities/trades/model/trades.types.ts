import { Trades } from '@shared/api/schema';

type TUnsubscribeTrade = () => void;

export type TTradesService = {
  create: (
    params: Trades.CreateTrade.RequestBody,
  ) => Promise<Trades.CreateTrade.ResponseBody['data']>;
  getAll: () => Promise<Trades.GetTrades.ResponseBody['data']>;
  get: (id: string) => Promise<Trades.GetTrade.ResponseBody['data']>;
  subscribe: (
    id: string,
    callback: (data: Trades.SubscribeTrade.ResponseBody) => void,
  ) => TUnsubscribeTrade;
};
