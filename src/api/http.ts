import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Content-type': 'application/json'
  }
});

export const getListOf = async <T>(url: string) => {
  const state = {
    data: null as any | null,
    error: null as Error | null
  };
  try {
    const { data } = await http.get<T>(url);
    state.data = data;
  } catch (error) {
    state.error = error as Error;
  }

  return state;
};
