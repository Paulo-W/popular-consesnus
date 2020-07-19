import {CustomUser} from './CustomUser';
import {DebateTags} from '../enums/Tags';
import {Channel} from './Channel';
import {Team} from './Team';
import {MessageInfo} from './MessageInfo';

export interface Debate {
  id: number;
  title: string;
  description: string;
  createdBy: CustomUser;
  team1: Team;
  team2: Team;
  tag: DebateTags;
  days: number;
  date: Date;
  channel: Channel;
}

export class DebateInfo {
  id: number;
  createdBy: string;
  channel: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  daysLeft: number;
  team1Name: string;
  team2Name: string;
  isTeam1: boolean;
  isTeam2: boolean;

  team1Votes: number;
  team2Votes: number;
  team1Percentage: number;
  team2Percentage: number;

  constructor(private debate: Debate, private currentUser: CustomUser) {
    this.id = debate.id;
    this.createdBy = debate.createdBy.username;
    this.channel = debate.channel.name;
    this.title = debate.title;
    this.description = debate.description;
    this.startDate = debate.date;
    this.endDate = this.getEndDate(debate.days);
    this.daysLeft = this.mapRemaining();
    this.team1Name = debate.team1.name;
    this.team2Name = debate.team2.name;
    this.isTeam1 = debate.team1.members.includes(currentUser);
    this.isTeam2 = debate.team2.members.includes(currentUser);

    this.team1Votes = Math.max(0, this.sumLikes(debate.team1));
    this.team2Votes = Math.max(0, this.sumLikes(debate.team2));

    this.team1Percentage = Math.round(this.mapPercentage(this.team1Votes));
    this.team2Percentage = Math.round(this.mapPercentage(this.team2Votes));
  }

  private sumLikes(team: Team): number {
    return team.messages?.reduce((sum, current) => sum + this.getMessageLikes(current), 0) || 0;
  }

  private getMessageLikes(message: MessageInfo): number {
    return (message.likeUsers?.length || 0) - (message.dislikeUsers?.length || 0);
  }

  private mapPercentage(teamNumber: number): number {
    const base = this.team1Votes + this.team2Votes;

    if (base === 0) {
      return 0;
    }

    return (teamNumber / base) * 100;
  }

  private getEndDate(days: number): Date {
    const copy = new Date(Number(this.startDate));
    copy.setDate(copy.getDate() + days);

    return copy;
  }

  mapRemaining(): number {
    const daysLeft = this.endDate.getDate() - this.startDate.getDate();
    // console.log(daysLeft);

    if (daysLeft > 0) {
      return daysLeft;
    } else {
      this.triggerFunction();
      return 0;
    }
  }

  private triggerFunction() {
    // remove debate
  }
}
