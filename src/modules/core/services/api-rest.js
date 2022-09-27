import { defaultMapper } from '@/modules/core/services';

export async function getAndMap(url, { queryParams = {}, mappedBy = defaultMapper }) {
  const data = await get(url, { queryParams });
  const mappedResults = data.results.map(mappedBy);
  return {
    ...data,
    results: mappedResults
  };
}

export async function get(url, { queryParams = {} }) {
  const params = objectToURLString(queryParams);
  return myFetch(`${url}${params}`, { method: 'GET' });
}

export async function myFetch(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => getResponseAsJSON(response))
    .catch((error) => error);
  return response.data;
}

function objectToURLString(params = {}) {
  const res = new URLSearchParams(params).toString();
  return res === '' ? '' : `?${res}`;
}

async function getResponseAsJSON(response) {
  const isJson = response.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;
  if (!response.ok) {
    const error = {
      status: (data && data.message) || response.status,
      ...data
    };
    return Promise.reject(error);
  }
  return data;
}
