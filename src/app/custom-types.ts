export type CustomGetUserChannelQuery = {
  channels: {
    items: [{
      channel: {
        id
        name
      }
    }]
  }
};

export type CustomChannelsList = {
  items: [CustomCreateChannel]
};

export type CustomCreateChannel = {
  id: string
  name: string
  members: {
    items?: [{
      id
      user: {
        id: string
      }
    }]
  }
};

export type CustomSpecificChannel = {
  id: string
  name: string
  description: string
  createdBy: SimpleUser
  members: {
    items: [{
      user: {
        id
      }
    }]
  }
};

export type CustomChannelMembers = {
  members: {
    items: [{
      id: string
      user: {
        id: string
      }
      channel: {
        id: string
      }
    }]
  }
};

export type CustomListDebates = {
  debates: {
    items: [CustomDebate]
  }
};

export type CustomDebate = {
  id: string
  title: string
  description: string
  days: number
  createdAt: Date
  createdBy: SimpleUser
};

export type CustomDebateList = {
  channels: {
    items: [CustomChannelDebateList]
  }
};

export type CustomChannelDebateList = {
  channel: CustomChannelDebate
};

export type CustomChannelDebate = {
  id: string
  name: string
  debates: {
    items: [CustomDebates]
  }
};

export type CustomDebates = {
  id: string
  title: string
  description: string
  days: number
  createdAt: Date
  createdBy: SimpleUser
  team1: {
    name: string
  }
  team2: {
    name: string
  }
};

export type MappedDebate = {
  id: string
  title: string
  description: string
  days: number
  tag?: string
  createdAt: Date
  channel: SimpleChannel
  createdBy: SimpleUser
  team1: {
    name: string
  }
  team2: {
    name: string
  }
};


export type DebateTeams = {
  team1: Team
  team2: Team
};

export type Team = {
  id: string
  members?: {
    items: [MemberReference]
  }
  messages?: {
    items: [
      MessageUserList
    ]
  }
};

export type MemberReference = {
  id: string
  user: SimpleUser
  team: SimpleTeam
};

export type TeamInfo = {
  team1: TeamValues
  team2: TeamValues
  percentage?: number
};

export type TeamValues = {
  isMember: boolean
  score: number
};

export type MessageInfo = {
  id: string
  teamId: {
    id: string
  }
  createdBy: SimpleUser
  content: string
  createdAt: Date
  likeUsers: string[]
  dislikeUsers: string[]
  image: string
};

export type MessageUserList = {
  likeUsers?: string[]
  dislikeUsers?: string[]
};

export type SimpleUser = {
  id: string
  username: string
};

export type SimpleChannel = {
  id: string
  name: string
};

export type SimpleTeam = {
  id: string
  name: string
};
