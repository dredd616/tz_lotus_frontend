import React, { FC } from 'react';
import { User } from '@entities/users';
import { CountdownTimer } from '@shared/ui';
import { TTrade } from './trade.types';
import { STrade, STitle, STimeInfo, SUsersList, SUserWrapper, SWinner, STrading } from './trade.styles';

export const Trade: FC<TTrade> = ({
                                      name,
                                      tradingUserId,
                                      users,
                                      isExpired,
                                      winnerUserId,
                                      dateEnd,
                                      onClick,
                                  }) => (
    <STrade onClick={onClick}>
        <STitle>
            {name}
        </STitle>
        <STimeInfo>
            {
                isExpired ? <div>Торг закрыт</div> :
                    <CountdownTimer targetDate={dateEnd} title="До закрытия торга осталось: "/>
            }
        </STimeInfo>
        <SUsersList>
            {users.map((user) => {
                const isWinner = winnerUserId === user.id;
                const isTrading = tradingUserId === user.id;
                return (
                    <SUserWrapper $trading={isTrading} $winner={isWinner} key={user.id}>
                        {isWinner && <SWinner>Победитель</SWinner>}
                        {isTrading && <STrading>Торгует</STrading>}
                        <User id={user.id} name={user.name} key={user.id}/>
                    </SUserWrapper>
                );
            })}
        </SUsersList>
    </STrade>
);
