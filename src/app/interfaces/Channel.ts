import {User} from './user';

export interface Channel {
  name: string;
  createdBy: User;
  members: number[];
  description: string;
}

