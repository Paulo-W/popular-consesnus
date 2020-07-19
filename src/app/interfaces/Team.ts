import {CustomUser} from './CustomUser';
import {MessageInfo} from './MessageInfo';

export interface Team {
  name: string;
  team: number;
  members: CustomUser[];
  messages?: MessageInfo[];
}
