import { API_KEY } from '../config/env';

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


export async function getUSANews() {
    try {
      let response = await fetch(
        url,
      );
      let responseJson = await response.json();
      return responseJson.articles;
    } catch (error) {
      console.error(error);
    }
  }