import {Debate} from '../interfaces/Debate';
import {USERS} from './mock-user';
import {DebateTags} from '../enums/Tags';
import {CHANNELS} from './mock-channel';

export const DEBATE: Debate[] = [
  {
    title: 'Cats Over Dogs',
    description: 'The debates is about cats vs dogs, cats are better because...',
    createdBy: USERS[0],
    team1: {
      name: 'Team Cats',
      members: [
        USERS[1], USERS[2]
      ]
    },
    team2: {
      name: 'Team Dogs',
      members: [
        USERS[3]
      ]
    },
    tag: DebateTags.JustForFun,
    days: 2,
    date: new Date(),
    channel: CHANNELS[0]
  },
  {
    title: 'The death penalty should be abolished',
    description: 'We can\'t keep the act because we keep finding rules to remove humane ways of taking the life',
    createdBy: USERS[1],
    team1: {
      name: 'Keep the death penalty',
      members: [
        USERS[0]
      ]
    },
    team2: {
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
    title: 'Should Jewels in England be returned to their original country?',
    description: 'The debates is about cats vs dogs, cats are better because',
    createdBy: USERS[2],
    team1: {
      name: 'Return of the Jewels',
      members: [
        USERS[1], USERS[2]
      ]
    },
    team2: {
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
    title: 'Human cloning should be legalized',
    description: 'Human cloning should be legalized, as humans have a need for organ transplants',
    createdBy: USERS[3],
    team1: {
      name: 'I want a twin',
      members: [
        USERS[1], USERS[2]
      ]
    },
    team2: {
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
