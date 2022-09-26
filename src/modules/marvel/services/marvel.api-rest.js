import { get } from '@/modules/core/services';

const baseUrl = `http://gateway.marvel.com/v1/public/`

const credentials = {
    'apikey': process.env.REACT_APP_PUBLIC_KEY,
  }
  
export async function getAll(domain, queryParams = {}){
    const response = await get(`${baseUrl}${domain}`, {...queryParams, ...credentials} )
    return response.data;
} 
