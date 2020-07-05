import {User} from './user';


export interface Message {
  id: number;
  user: User;
  date: Date;
  content: string;
  likes: number;
  likeUsers?: User[];
  dislikeUsers?: User[];
}
