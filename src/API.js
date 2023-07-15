import axios from 'axios';

export async function fetchImages(q, page, perPage) {
  const URL = 'https://pixabay.com/api/';
  const KEY = '38254430-6263a5046068a5a8f98d526e2';

  const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
}
