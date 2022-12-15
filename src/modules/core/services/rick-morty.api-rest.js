import { get } from './api-rest';

export async function getCharacterById(id = 1) {
  return get(`https://rickandmortyapi.com/api/character/${id}`);
}
