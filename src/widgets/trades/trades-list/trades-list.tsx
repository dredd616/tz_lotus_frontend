import React, { FC } from 'react';
import { useGetTrades } from '@entities/trades';
import { Trade } from '@features/trades';
import { RenderRemote } from 'remote-data-react-query/lite';
import { Loader } from '@shared/ui';
import { Link } from 'react-router-dom';
import { STradesListWrapper, STradesList, STitle } from './trades-list.styles'


export const TradesList: FC = () => {
    const remoteTrades = useGetTrades();

    return (
        <RenderRemote
            data={remoteTrades}
            success={(trades) => (
                <STradesListWrapper>
                    {
                        trades.length ? <>
                            <STitle>Список торгов</STitle>
                            <STradesList>
                                {trades.map((trade) => (
                                    <Link to={trade.id} key={trade.id} itemID={trade.id}
                                          style={{textDecoration: 'none', display: 'block'}}>
                                        <Trade {...trade} />
                                    </Link>
                                ))}
                            </STradesList>
                        </> : <STitle>Cписок торгов пуст</STitle>
                    }
                </STradesListWrapper>
            )}
            pending={<Loader color="#6e7aac"/>}
        />
    );
};
