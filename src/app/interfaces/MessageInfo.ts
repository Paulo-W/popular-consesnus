import {User} from './User';


export interface MessageInfo {
  id?: number;
  user: User;
  date: Date;
  content: string;
  likes: number;
  likeUsers?: User[];
  dislikeUsers?: User[];
}
