import {User} from './User';
import {MessageInfo} from './MessageInfo';

export interface Team {
  name: string;
  team: number;
  members: User[];
  messages?: MessageInfo[];
}
