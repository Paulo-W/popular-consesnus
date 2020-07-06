import {User} from './User';

export interface Channel {
  name: string;
  createdBy: User;
  members: number[];
  description: string;
  isMember: boolean;
}

