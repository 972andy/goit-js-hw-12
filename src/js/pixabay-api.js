import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchPhotos(searchValue, page) {
  const axiosOptions = {
    params: {
      key: '45713386-799404e4cc786512a2668b467',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      q: searchValue,
      page: page,
      per_page: 15,
    },
  };
  return axios.get('', axiosOptions);
}