import React, { FC, PropsWithChildren } from 'react';
import DateTimeDisplay from '../date-time-display/date-time-display';
import { SShowCounterWrapper } from './show-counter.styles'

type ShowCounterProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const ShowCounter: FC<PropsWithChildren<ShowCounterProps>> = ({days, hours, minutes, seconds}) => {
    return (
        <SShowCounterWrapper>
            { days ? <><DateTimeDisplay value={days}/><p>д.</p></> : null }
            { hours ? <><DateTimeDisplay value={hours}/><p>ч.</p></> : null }
            { minutes ? <><DateTimeDisplay value={minutes}/><p>м.</p></> : null }
            { seconds ? <><DateTimeDisplay value={seconds}/><p>с.</p></> : null }
        </SShowCounterWrapper>
    );
};
