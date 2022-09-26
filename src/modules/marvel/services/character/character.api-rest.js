import { getAll } from '../marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
const domain = `characters`

export async function getAllCharacters(mapper = defaultMapper){ 
    const pageResult =  await getAll(domain);
    const results = pageResult.results.map(mapper);
    return {
        ...pageResult,
        results
    }
}
