import React, {FC} from 'react';

type DateTimeDisplayProps = {
    value: number;
}

export const DateTimeDisplay: FC<DateTimeDisplayProps> = ({ value }) => (
        <div>
            <p>{value}</p>
        </div>
    );
