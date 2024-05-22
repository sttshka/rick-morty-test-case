import { GenderEnum, StatusEnum } from './enums.ts';
import { Nullable } from './handlers';

export interface ICharacter {
  id: number;
  name: string;
  status: Nullable<StatusEnum>;
  species: string;
  type: string;
  gender: GenderEnum;
  origin: any;
  location: any;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
