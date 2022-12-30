import * as Yup from 'yup';
import { ERROR_MSG } from '@shared/config';
import { TCreateUserState } from './create-user.types';

export const CREATE_USER_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .trim(ERROR_MSG.required('имя'))
    .min(1, ERROR_MSG.required('имя'))
    .required(ERROR_MSG.required('имя')),
});

export const CREATE_USER_INITIAL_STATE: TCreateUserState = {
  name: '',
};
