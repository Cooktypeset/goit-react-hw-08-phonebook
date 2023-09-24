import { Suspense } from 'react';
import { Header } from 'components/header/Header';
import { Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <div>
            <Header />
            <Suspense>
             <Outlet/>
            </Suspense>
        </div>
    );
};