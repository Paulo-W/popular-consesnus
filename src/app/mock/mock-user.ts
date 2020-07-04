import {User} from '../interfaces/user';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Paul',
    rank: 'beginner',
    totalLikes: 60,
    username: 'ItsMePaulo',
    email: 'my.real.email.com',
    password: '123123',
    channels: [
      'Animals',
      'Politics',
      'Religion'
    ]
  },
  {
    id: 2,
    name: 'Frank',
    rank: 'beginner',
    totalLikes: 360,
    username: 'ItsMeFrank',
    email: 'my.real.email.com',
    password: '123123',
    channels:  [
      'Animals',
      'Politics',
      'Religion'
    ]
  },
  {
    id: 3,
    name: 'Bob',
    rank: 'beginner',
    totalLikes: 40,
    username: 'ItsMeBob',
    email: 'my.real.email.com',
    password: '123123',
    channels:  [
      'Animals',
      'Politics',
      'food'
    ]
  },
  {
    id: 4,
    name: 'Sally',
    rank: 'beginner',
    totalLikes: 40,
    username: 'ItsMeSally',
    email: 'my.real.email.com',
    password: '123123',
    channels: []
  }
];
