export interface CustomUser {
  id?: number;
  username: string;
  channels: string[];
}

export interface User {
  id: string;
  username: string;
    // channels: UserChannel[];
    // debates: Debates[];
}
