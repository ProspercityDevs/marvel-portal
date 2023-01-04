import { getAndMap } from '@/modules/core/services';
import { defaultMapper } from '@/modules/core/services';
const BASE_URL = `https://gateway.marvel.com/v1/public/`;
const PAGENATE_BY = 20;

const credentials = {
  apikey: process.env.REACT_APP_PUBLIC_KEY
};



export async function getAllPaginated(
  domain,
  page,
  nameStarts,
  { mappedBy = defaultMapper, queryParams = {}, itemsPerPage = PAGENATE_BY }
) {
  return getAll(domain, nameStarts, {
    mappedBy,
    queryParams: {
      ...queryParams,
      limit: itemsPerPage,
      offset: getOffset(page, itemsPerPage)
    }
  });
}

export async function getAll(domain, nameStarts, { mappedBy = defaultMapper, queryParams = {} }) {
  return getAndMap(`${BASE_URL}${domain}`, {
    mappedBy,
    queryParams: {
      ...nameStarts,
      ...queryParams,
      ...credentials
    }
  });
}

function getOffset(page, itemsPerPage) {
  const currentOffset = page - 1;
  return currentOffset * itemsPerPage;
}
