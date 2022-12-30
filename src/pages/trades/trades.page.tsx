import React, { FC } from 'react';
import { CreateTrade, TradesList } from '@widgets/trades';
import { STradesPage } from './trades.page.styles'

export const TradesPage: FC = () => (
  <STradesPage>
    <CreateTrade />
    <TradesList />
  </STradesPage>
);
