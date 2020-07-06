import {User} from './User';
import {Message} from './Message';

export interface Team {
  name: string;
  team: number;
  members: User[];
  messages?: Message[];
}
