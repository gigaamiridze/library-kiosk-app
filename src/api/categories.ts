import axios from 'axios';
import { IBookData, IBookCategory } from '../interfaces';
import { Api } from '../constants';

export const getBookCategories = async (page: number, maxResults: number) => {
  const startIndex = page * maxResults;
  const { data } = await axios.get<IBookData>(`${Api.BOOKS_URL}/volumes?q=all&startIndex=${startIndex}&maxResults=${maxResults}&key=${Api.KEY}`);
  
  const uniqueCategories = new Set<string>();

  const categories: IBookCategory[] = data.items.reduce((acc: IBookCategory[], item) => {
    const category = item.volumeInfo.categories?.[0];

    // Check if the category is not a duplicate
    if (category && !uniqueCategories.has(category)) {
      uniqueCategories.add(category);

      acc.push({
        id: item.id,
        title: category,
      });
    }

    return acc;
  }, []);

  return categories;
}
