import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50309371-d07515f8c9a862bfe72f170ff';

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => response.data);
}