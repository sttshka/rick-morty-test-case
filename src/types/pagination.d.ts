import { Nullable } from './handlers';

export interface IPagination {
  count: number;
  pages: number;
  next: Nullable<string>;
  prev: Nullable<string>;
}
