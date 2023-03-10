import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const Main = () => {
    return (
        <div className='w-full relative'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;