import { getAll } from '@/modules/marvel/services/marvel.api-rest.js';
import { defaultMapper } from '@/modules/core/services';
const domain = `characters`;

export async function getAllCharacters(mapper = defaultMapper, queryParams = {}) {
  const pageResult = await getAll(domain, queryParams);
  const results = pageResult.results.map(mapper);
  return {
    ...pageResult,
    results
  };
}
