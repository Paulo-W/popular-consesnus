import {User} from './user';
import {DebateTags} from '../enums/Tags';
import {Channel} from './Channel';
import {Team} from './Team';

export interface Debate {
  title: string;
  description: string;
  createdBy: User;
  team1: Team;
  team2: Team;
  tag: DebateTags;
  days: number;
  date: Date;
  channel: Channel;
}

export interface DebateForm {
  title: string;
  description: string;
  createdBy: User;
  team1Name: string;
  team2Name: string;
  tag: DebateTags;
  days: number;
  date: Date;
  channel: Channel;
}


export class DebateInfo {

  constructor(private debate: Debate, private currentUser: User) {
    this.createdBy = debate.createdBy.username;
    this.channel = debate.channel.name;
    this.title = debate.title;
    this.description = debate.description;
    this.date = debate.date;
    this.team1Name = debate.team1.name;
    this.team2Name = debate.team2.name;
    this.isTeam1 = debate.team1.members.includes(currentUser);
    this.isTeam2 = debate.team2.members.includes(currentUser);
  }

  createdBy: string;
  channel: string;
  title: string;
  description: string;
  date: Date;
  team1Name: string;
  team2Name: string;
  isTeam1: boolean;
  isTeam2: boolean;
}
