import {Debate} from '../interfaces/Debate';
import {USERS} from './mock-user';
import {DebateTags} from '../enums/Tags';
import {CHANNELS} from './mock-channel';

export const DEBATE: Debate[] = [
  {
    id: 1,
    title: 'Cats Over Dogs',
    description: 'The debates is about cats vs dogs, cats are better because...',
    createdBy: USERS[0],
    team1: {
      team: 1,
      name: 'Team Cats',
      members: [
        USERS[1], USERS[2]
      ],
      messages: [
        {
          id: 1,
          user: USERS[1],
          date: new Date(),
          content: 'Cats are independent and don\'t need constant attention',
          likes: 23,
        },
        {
          id: 2,
          user: USERS[2],
          date: new Date(),
          content: 'Cats are made of liquid and super cute :)',
          likes: 12,
        }
      ]
    },
    team2: {
      team: 2,
      name: 'Team Dogs',
      members: [
        USERS[3]
      ],
      messages: [
        {
          id: 3,
          user: USERS[3],
          date: new Date(),
          content: 'Dogs are more loyal than cats and you can pet them as long as you want, I\'ve never ' +
            'been able to pet a cat for too long!',
          likes: 43,
          likeUsers: [

          ]
        }
      ]
    },
    tag: DebateTags.JustForFun,
    days: 2,
    date: new Date(),
    channel: CHANNELS[0]
  },
  {
    id: 2,
    title: 'The death penalty should be abolished',
    description: 'We can\'t keep the act because we keep finding rules to remove humane ways of taking the life',
    createdBy: USERS[1],
    team1: {
      team: 1,
      name: 'Keep the death penalty',
      members: [
        USERS[0]
      ]
    },
    team2: {
      team: 2,
      name: 'Don\'t keep the death penalty',
      members: [
        USERS[1]
      ]
    },
    tag: DebateTags.Serious,
    days: 2,
    date: new Date(),
    channel: CHANNELS[1]
  },
  {
    id: 3,
    title: 'Should Jewels in England be returned to their original country?',
    description: 'The debates is about cats vs dogs, cats are better because',
    createdBy: USERS[2],
    team1: {
      team: 1,
      name: 'Return of the Jewels',
      members: [
        USERS[1], USERS[2]
      ]
    },
    team2: {
      team: 2,
      name: 'Finders Keeps Losers not From England!',
      members: [
        USERS[3]
      ]
    },
    tag: DebateTags.JustForFun,
    days: 2,
    date: new Date(),
    channel: CHANNELS.find(it => it.name === 'Politics')
  },
  {
    id: 4,
    title: 'Human cloning should be legalized',
    description: 'Human cloning should be legalized, as humans have a need for organ transplants',
    createdBy: USERS[3],
    team1: {
      team: 1,
      name: 'I want a twin',
      members: [
        USERS[1], USERS[2]
      ]
    },
    team2: {
      team: 2,
      name: '1 of me is enough',
      members: [
        USERS[3]
      ]
    },
    tag: DebateTags.JustForFun,
    days: 2,
    date: new Date(),
    channel: CHANNELS.find(it => it.name === 'Science')
  }
];
