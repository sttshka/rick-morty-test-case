import { getListOf } from './http.ts';
import { IFilterParam } from '../types';

export const getFilteredCharacterListByParam = async <T>(param: IFilterParam) => {
  const payload = Object.entries(param).reduce((acc, currentValue, index) => {
    const [key, value] = currentValue;
    if (value == null) return acc;
    acc += index === 0 ? `?${key}=${value}` : `&${key}=${value}`;
    return acc;
  }, '');

  return getListOf<T>(`/character${payload}`);
};
