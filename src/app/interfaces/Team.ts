import {User} from './user';
import {Message} from './Message';

export interface Team {
  name: string;
  members: User[];
  messages?: Message[];
}
