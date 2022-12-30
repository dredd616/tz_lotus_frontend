import { User } from '@shared/api/schema';

export type TTrade = {
    id: string;
    name: string;
    users: User[];
    dateEnd: string;
    winnerUserId?: string | null;
    tradingUserId?: string | null;
    isExpired: boolean;
    onClick?: () => void;
    nextTurnTime?: number | null;
};
