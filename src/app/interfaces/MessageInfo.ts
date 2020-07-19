import {CustomUser} from './CustomUser';


export interface MessageInfo {
  id?: number;
  user: CustomUser;
  date: Date;
  content: string;
  likes: number;
  likeUsers?: CustomUser[];
  dislikeUsers?: CustomUser[];
}
