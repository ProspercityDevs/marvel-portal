import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/notFoundPage/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { CharactersPage2 } from '@/modules/marvel-characters/pages/CharactersPage2';
import { SeriesPage } from '@/modules/marvel-characters/pages/SeriesPage';
	@@ -18,7 +18,7 @@ const AppRoutes = () => (
    <Route exact path="/events" element={<EventsPage />} />
    <Route exact path="/series" element={<SeriesPage />} />
    <Route exact path="/stories" element={<StoriesPage />} />
    <Route path="*" element={<NotFoundPage404 />} />
  </Routes>
);
