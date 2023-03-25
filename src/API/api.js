import { API_BASE_URL, KEY } from "./config";
import queryString from 'query-string'

export function get(path, params){
    const query = queryString.stringify(params);
    return fetch(`${API_BASE_URL}${path}${query}`, {
        headers: {
            Authorization: `KEY ${KEY}`,
            withCredentials: true,
        }
    })
}