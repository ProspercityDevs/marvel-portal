import { getAndMap } from './api-rest';

const BASE_URL = `https://gateway.marvel.com/v1/public/`;

const credentials = {
  apikey: 'f7187ecad60a611dc96b5549fdeff647'
};

export async function getAllPaginated(
  domain,
  page,
  name,
  order,
  {mappedBy,itemsPerPage, queryParams} 
) { 
  return getAll(domain, {
    mappedBy,
    queryParams: {
      ...queryParams,
      ...name,
      ...order,
      limit: itemsPerPage,
      offset: getOffset(page, itemsPerPage)
    }
  });
}


export  async function getAll(domain,  { mappedBy, queryParams}) {
  return getAndMap(`${BASE_URL}${domain}`, {
    mappedBy,
    queryParams: {
      ...queryParams,
      ...credentials
    }
  });
}

function getOffset(page, itemsPerPage) {
  const currentOffset = page-1;
  return currentOffset * itemsPerPage;
}
