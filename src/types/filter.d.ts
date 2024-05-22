import { StatusEnum } from './enums.ts';
import { Nullable } from './handlers';

export interface IFilterParam {
  name?: string;
  status?: Nullable<StatusEnum>;
  page?: number;
}

export interface IResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: T[];
}
