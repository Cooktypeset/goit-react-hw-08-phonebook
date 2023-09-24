import { Suspense } from 'react';
import { Header } from 'components/header/Header';

export const Main = () => {
    return (
        <div>
            <Header />
            <Suspense
            ></Suspense>
        </div>
    );
};