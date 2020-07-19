import {CustomUser} from './CustomUser';

export interface Channel {
  name: string;
  createdBy: CustomUser;
  members: number[];
  description: string;
  isMember: boolean;
}

