import * as Yup from 'yup';
import { ERROR_MSG } from '@shared/config';
import { TCreateTradeState } from './create-trade.types';

export const CREATE_TRADE_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .trim(ERROR_MSG.required('имя'))
    .min(1, ERROR_MSG.required('имя'))
    .required(ERROR_MSG.required('имя')),
  userIDs: Yup.array().of(Yup.string()).min(2, ERROR_MSG.min(2, 'пользователи')),
  dateEnd: Yup.string()
    .trim(ERROR_MSG.required('дата окончания'))
    .min(1, ERROR_MSG.required('дата окончания'))
    .required(ERROR_MSG.required('дата окончания')),
});

export const CREATE_TRADE_INITIAL_STATE: TCreateTradeState = {
  name: '',
  userIDs: [],
  dateEnd: '',
};
