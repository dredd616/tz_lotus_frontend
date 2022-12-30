import React, { ChangeEvent, FC } from 'react';
import { useImmer } from 'use-immer';
import { RenderRemote } from 'remote-data-react-query/lite';
import { notification } from '@shared/lib/notification';
import { useCreateTrade } from '@entities/trades';
import { useGetUsers, User } from '@entities/users';
import { Loader, Input, Button } from '@shared/ui';
import { SCreateTrade, SInputWrapper, SUsersList, SUsersListTitle, SCreateTradeTitle, SUserWrapper } from './create-trade.styles';
import { TCreateTradeState } from './create-trade.types';
import { CREATE_TRADE_INITIAL_STATE, CREATE_TRADE_SCHEMA } from './create-trade.constants';

export const CreateTrade: FC = () => {
    const [state, setState] = useImmer<TCreateTradeState>(CREATE_TRADE_INITIAL_STATE);
    const {mutateAsync, isLoading} = useCreateTrade();
    const remoteUsers = useGetUsers();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((draft) => {
            draft.name = e.target.value;
        });
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((draft) => {
            draft.dateEnd = e.target.value;
        });
    };

    const handleToggleUser = (id: string) => {
        if (state.userIDs.includes(id)) {
            setState((draft) => {
                draft.userIDs.splice(
                    draft.userIDs.findIndex((userId) => userId === id),
                    1,
                );
            });
        } else {
            setState((draft) => {
                draft.userIDs.push(id);
            });
        }
    };

    const createTrade = () => {
        CREATE_TRADE_SCHEMA.validate(state)
            .then(() => {
                mutateAsync({
                    dateEnd: new Date(state.dateEnd).toISOString(),
                    name: state.name,
                    userIDs: state.userIDs,
                }).then(() => setState(CREATE_TRADE_INITIAL_STATE));
            })
            .catch((error) => {
                notification.error(error.message);
            });
    };

    return (
        <SCreateTrade>
            <SCreateTradeTitle>
                Создание торгов
            </SCreateTradeTitle>
            <SInputWrapper>
                <Input disabled={isLoading}
                       type="text" value={state.name}
                       onChange={handleNameChange}
                       placeholder="Название торгов"
                />
            </SInputWrapper>
            <SInputWrapper>
                <Input type="datetime-local"
                       value={state.dateEnd}
                       onChange={handleDateChange}
                       placeholder="Укажите дату завершения торгов"
                />
            </SInputWrapper>
            <SUsersListTitle>Выберите участников:</SUsersListTitle>
            <SUsersList>
                <RenderRemote
                    data={remoteUsers}
                    success={(users) =>

                        users.map((user) => (
                            <SUserWrapper key={user.id}>
                                <User
                                    id={user.id}
                                    name={user.name}
                                    selected={state.userIDs.includes(user.id)}
                                    onClick={() => handleToggleUser(user.id)}
                                />
                            </SUserWrapper>
                        ))

                    }
                    pending={<Loader color="#ffffff" size={40}/>}
                />
            </SUsersList>
            <Button disabled={isLoading} onClick={createTrade}>
                Создать
            </Button>
        </SCreateTrade>
    );
};
