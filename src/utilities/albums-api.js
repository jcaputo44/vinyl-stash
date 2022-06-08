import sendRequest from './send-request';
const BASE_URL = '/api/albums';

export function search(query) {
  return sendRequest(BASE_URL, 'POST', {query});
}

export function addAlbum(album) {
  return sendRequest(`${BASE_URL}/add`, 'POST', album);
}

export function getCollection(collection) {
  return sendRequest(BASE_URL)
}