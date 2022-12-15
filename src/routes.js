import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { CharactersPage as RickMortyCharactersPage } from '@/modules/rick-morty-characters/pages/CharactersPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharacterPage />} />
    <Route exact path="/rick-morty" element={<RickMortyCharactersPage />} />
    <Route element={<NotFoundPage404 />} />
  </Routes>
);

export default AppRoutes;
