import React, {FC} from 'react';

type DateTimeDisplayProps = {
    value: number;
}

const DateTimeDisplay: FC<DateTimeDisplayProps> = ({ value }) => {
    return (
        <div>
            <p>{value}</p>
        </div>
    );
};

export default DateTimeDisplay;