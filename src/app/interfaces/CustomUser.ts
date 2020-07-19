export interface CustomUser {
  id: number;
  name: string;
  rank: string;
  username: string;
  totalLikes: number;
  email: string;
  password: string;

  channels: string[];
}
