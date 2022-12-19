import { get } from '@/modules/core/services';
import { defaultMapper } from '@/modules/core/services';

const BASE_URL = `https://gateway.marvel.com/v1/public/`;
const PAGENATE_BY = 20;

const credentials = {
  apikey: process.env.REACT_APP_PUBLIC_KEY
};

export async function getAllPaginated(
  domain,
  page,
  { mappedBy = defaultMapper, queryParams = {}, itemsPerPage = PAGENATE_BY }
) {
  return getAll(domain, {
    mappedBy,
    queryParams: {
      ...queryParams,
      limit: itemsPerPage,
      offset: getOffset(page, itemsPerPage)
    }
  });
}

export function getAll(domain, { mappedBy = defaultMapper, queryParams = {} }) {
  return getAndMap(`${BASE_URL}${domain}`, {
    mappedBy,
    queryParams: {
      ...queryParams,
      ...credentials
    }
  });
}

export async function getAndMap(url, { queryParams = {}, mappedBy = defaultMapper }) {
  const response = await get(url, { queryParams });
  const mappedResults = response.data.results.map(mappedBy);
  return {
    ...response,
    results: mappedResults
  };
}

function getOffset(page, itemsPerPage) {
  const currentOffset = page - 1;
  return currentOffset * itemsPerPage;
}
