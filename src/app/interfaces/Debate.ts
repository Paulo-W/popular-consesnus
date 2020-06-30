import {User} from './user';

export interface Debate {
  title: string;
  description: string;
  createdBy: User;
}
