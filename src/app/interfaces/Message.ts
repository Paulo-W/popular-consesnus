import {User} from './user';


export interface Message {
  user: User;
  date: Date;
  content: string;
  likes: number;
}
