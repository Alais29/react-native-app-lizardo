import { NEWS_API_KEY } from "@env";

export const NEWS_API_URL = `https://newsapi.org/v2/everything?q=games&sortBy=publishedAt&sources=buzzfeed,engadget,ign,polygon&apiKey=${NEWS_API_KEY}`;
