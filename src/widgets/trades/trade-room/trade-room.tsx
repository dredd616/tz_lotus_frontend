import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTradeSubscription } from '@entities/trades';
import { RenderRemote } from 'remote-data-react-query/lite';
import { CountdownTimer, LiveClock } from '@shared/ui';
import { ClockLoader } from 'react-spinners';
import {
    STradeRoom,
    STitle,
    SHelpMessage,
    STradersList,
    STrader,
    SHeader,
    SWinner,
    STraderInfo
} from './trade-room.styles'

export const TradeRoom: FC = () => {
    const {id} = useParams();
    const remoteTrade = useTradeSubscription(id);
    return <RenderRemote data={remoteTrade} success={(trade) => (
            <STradeRoom>
                <STitle>
                    Ход торгов {trade.name} (<LiveClock/>)
                </STitle>
                <SHelpMessage>
                    <CountdownTimer targetDate={trade.dateEnd} title="До окончания торгов: "/>
                </SHelpMessage>
                <STradersList>
                    {
                        trade.users.map((user) => {
                                const isCurrentTrading = user.id === trade.tradingUserId
                                const isCurrentWinner = user.id === trade.winnerUserId

                                return (<STrader key={user.id}>
                                    <SHeader $trading={isCurrentTrading} $winner={isCurrentWinner}>
                                        {isCurrentTrading && <><CountdownTimer targetDate={trade.nextTurnTime}/>&nbsp;
                                            <ClockLoader color="#035e33" size={18} speedMultiplier={0.5}/>
                                        </>}
                                        {isCurrentWinner && <SWinner>Победитель</SWinner>}
                                    </SHeader>
                                    <STraderInfo>
                                        {user.name}
                                    </STraderInfo>
                                </STrader>)

                            }
                        )
                    }
                </STradersList>
            </STradeRoom>
        )}/>;
};
