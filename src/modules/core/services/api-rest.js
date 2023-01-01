

export async function getAndMap(url, { queryParams, mappedBy}) {
  const params = objectToURLString(queryParams);
  const data = await myFetch(`${url}${params}`);
  const mappedResults = data.results.map(mappedBy);
  return {
    ...data,
    results: mappedResults
  };
}


async function myFetch(url) {
  const response = await fetch(url, {  
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((error) => error);

    return response.data;
}

function objectToURLString(params = {}) {
  const res = new URLSearchParams(params).toString();
  return `?${res}`;
};
