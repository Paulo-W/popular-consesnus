import {CustomUser} from './CustomUser';

export interface Channel {
  name: string;
  createdBy: CustomUser;
  members: number[];
  description: string;
  isMember: boolean;
}

export type ChannelList = {
  id: string;
  name: string;
  members: [ChannelMembers];
};

export type ChannelMembers = {
  userId: string
  relationshipId: string
};
