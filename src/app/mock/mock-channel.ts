import {Channel} from '../interfaces/Channel';
import {USERS} from './mock-user';

export const CHANNELS: Channel[] = [
  {
    name: 'Animals',
    createdBy: USERS[0],
    members: [
      1, 2, 3
    ],
    description: 'A channels all about animals and all things animal related',
    isMember: true
  },
  {
    name: 'Politics',
    createdBy: USERS[1],
    members: [
      1,
    ],
    description: 'A channels all about politics and all things politics related'
  },
  {
    name: 'Religion',
    createdBy: USERS[1],
    members: [
      1, 3
    ],
    description: 'A channels about religion'
  },
  {
    name: 'Food',
    createdBy: USERS[1],
    members: [
      2, 3
    ],
    description: 'A channels about food'
  },
  {
    name: 'Sports',
    createdBy: USERS[1],
    members: [
      3
    ],
    description: 'A channels about sports'
  },
  {
    name: 'Science',
    createdBy: USERS[1],
    members: [
      2, 3
    ],
    description: 'A channels about science'
  }
];
