import React, { ChangeEvent, FC } from 'react';
import { useImmer } from 'use-immer';
import { notification } from '@shared/lib/notification';
import { useCreateUser } from '@entities/users';
import { Button, Input } from '@shared/ui';
import { TCreateUserState } from './create-user.types';
import { CREATE_USER_INITIAL_STATE, CREATE_USER_SCHEMA } from './create-user.constants';
import { SCreateUser, SInputWrapper, SCreateUserTitle } from './create-user.styles';

export const CreateUser: FC = () => {
    const [state, setState] = useImmer<TCreateUserState>(CREATE_USER_INITIAL_STATE);
    const {mutateAsync, isLoading} = useCreateUser();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((draft) => {
            draft.name = e.target.value;
        });
    };

    const createUser = () => {
        CREATE_USER_SCHEMA.validate(state)
            .then(() => {
                mutateAsync(state).then(() => setState(CREATE_USER_INITIAL_STATE));
            })
            .catch((error) => {
                notification.error(error.message);
            });
    };

    return (
        <SCreateUser>
            <SCreateUserTitle>Создание пользователя</SCreateUserTitle>
            <SInputWrapper>
                <Input
                    disabled={isLoading}
                    type="text" value={state.name}
                    onChange={handleNameChange}
                    placeholder="Введите имя"/>
            </SInputWrapper>
            <Button disabled={isLoading} onClick={createUser}>
                Создать
            </Button>
        </SCreateUser>
    );
};
