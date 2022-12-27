import { getSerieImage } from './serie.handler';

export function mapSerieToCard(serie) {
  return {
    name: serie.title,
    image: getSerieImage(serie),
    id: serie.id
  };
}

// Se agrega función para retornar la lísta de personajes
export function mapSerieToList(serie) {
  return {
    title: serie.title,
    id: serie.id
  };
};
