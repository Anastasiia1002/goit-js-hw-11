import axios from 'axios';

const BaseURL = 'https://pixabay.com/api/';
const KEY = '29461295-5611ba5917eca01d45986ceff';

export const options = {
  baseURL: `https://pixabay.com/api/?key=${KEY}`,
  method: 'GET',
  params: {
    page: 1,
    per_page: 40,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
};
export async function fetchImage() {
  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
