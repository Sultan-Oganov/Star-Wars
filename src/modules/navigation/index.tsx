import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../views/Home';
import Detail from '../../views/Detail/index';

const RootRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:category/:label" element={<Detail />} />
            <Route path="/search/:category" element={<Detail />} />
        </Routes>
    );
};

export default RootRoutes;