import React, { FC } from 'react';
import { useCountDown } from './hooks/useCountDown';
import { ShowCounter } from './show-counter/show-counter';

type CountdownTimerProps = {
    targetDate?: number | string | null;
    title?: string
}

export const CountdownTimer: FC<CountdownTimerProps> = ({targetDate, title}) => {
    const [days, hours, minutes, seconds] = useCountDown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <div>Время вышло</div>;
    }
    return (
        <>
            <div>{title}</div>
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </>
    );
};