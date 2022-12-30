import React, { FC } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@app/providers';
import { TradesPage } from '@pages/trades';
import { TradePage } from '@pages/trade';
import { UsersPage } from '@pages/users';
import { AppLayout } from '@shared/layouts';
import { ROUTES } from '@shared/config';

export const App: FC = () => (
    <QueryClientProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={ROUTES.USERS.path}
                        element={
                            <AppLayout activeRouteName={ROUTES.USERS.name}>
                                <UsersPage/>
                            </AppLayout>
                        }
                    />
                    <Route
                        path={ROUTES.TRADES.path}
                        element={
                            <AppLayout activeRouteName={ROUTES.TRADES.name}>
                                <TradesPage/>
                            </AppLayout>
                        }
                    />
                    <Route
                        path={ROUTES.TRADE.path}
                        element={
                            <AppLayout activeRouteName={ROUTES.TRADE.name}>
                                <TradePage/>
                            </AppLayout>
                        }
                    />
                    <Route path="*" element={<Navigate to={ROUTES.USERS.path} replace/>}/>
                </Routes>
                <ToastContainer/>
            </BrowserRouter>
    </QueryClientProvider>
);
