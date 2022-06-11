import axios from 'axios';

import { NEWS_API_URL } from '../Constants/news';

export const getNews = async () => {
  try {
    const response = await axios.get(NEWS_API_URL);
    return response.data.articles;
  } catch (error) {
    console.log('error', error);
  }
};
