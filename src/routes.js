import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage404 from "./modules/core/pages/NotFoundPage404";
import HomePage from "./modules/core/pages/HomePage";
import SubPage from './modules/core/pages/SubPage';
import { CharacterPage } from './modules/marvel/pages/CharactersPage';

const AppRoutes = () => (
    <Routes>
        <Route exact path='/' element={ <HomePage/>} />
        <Route exact path='/sub-page' element={<SubPage/>} />
        <Route exact path='/characters' element={<CharacterPage/>} />
        <Route element={<NotFoundPage404/>} />
    </Routes>
);


export default AppRoutes;