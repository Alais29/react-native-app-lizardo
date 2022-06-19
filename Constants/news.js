import { config } from '../Config';

export const NEWS_API_URL = `https://newsapi.org/v2/everything?q=games&sortBy=publishedAt&sources=buzzfeed,engadget,ign,polygon&pageSize=15&apiKey=${config.NEWS_API_KEY}`;
