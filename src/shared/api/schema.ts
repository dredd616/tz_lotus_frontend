export type Response<T> = {
  data: T;
  status: { kind: 'error' | 'success'; message?: string; notifyMessage?: string };
};

export type User = {
  id: string;
  name: string;
};

export type Trade = {
  id: string;
  users: User[];
  dateEnd: string;
  name: string;
  winnerUserId?: string | null;
  tradingUserId?: string | null;
  nextTurnTime?: number | null;
  isExpired: boolean;
};

export namespace Users {
  export namespace CreateUser {
    export type RequestBody = {
      name: string;
    };
    export type ResponseBody = Response<User>;
  }
  export namespace GetUsers {
    export type ResponseBody = Response<User[]>;
  }
}

export namespace Trades {
  export namespace CreateTrade {
    export type RequestBody = {
      name: string;
      userIDs: string[];
      dateEnd: string;
    };
    export type ResponseBody = Response<Trade>;
  }
  export namespace GetTrade {
    export type ResponseBody = Response<Trade>;
  }
  export namespace GetTrades {
    export type ResponseBody = Response<Trade[]>;
  }
  export namespace SubscribeTrade {
    export type ResponseBody = Trade;
  }
}
