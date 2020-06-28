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
    channels: [
      'Animals',
      'Food',
      'Science'
    ]
  }
];
