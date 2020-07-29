import {Injectable} from '@angular/core';
import API, {graphqlOperation} from '@aws-amplify/api';
import {Observable} from 'zen-observable-ts';

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

export type SimpleUser = {
  id: string
  username: string
};

@Injectable({
  providedIn: 'root'
})
export class CustomApiService {

  OnCreateChannelListener: Observable<CustomCreateChannel> = API.graphql(
    graphqlOperation(
      `subscription OnCreateChannel {
        onCreateChannel {
          id
          name
          members {
            items {
              user {
                id
              }
            }
          }
        }
      }`
    )
  ) as Observable<CustomCreateChannel>;

  async GetChannelMembers(id: string): Promise<CustomChannelMembers> {
    const statement = `query GetChannelDebates($id: ID!) {
        getChannel(id: $id) {
          members {
            items {
              id
              user {
                id
              }
              channel {
                id
              }
            }
          }
        }
      }`;

    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;

    return response.data.getChannel as CustomChannelMembers;
  }

  async GetChannelDebates(id: string): Promise<CustomListDebates> {
    const statement = `query GetChannelDebates($id: ID!) {
        getChannel(id: $id) {
          debates {
            items {
              id
              title
              description
              days
              createdAt
              createdBy {
                id
                username
              }
            }
          }
        }
      }`;

    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getChannel as CustomListDebates;
  }

  async GetSpecificChannel(id: string): Promise<CustomSpecificChannel> {
    const statement = `query GetSpecificChannel($id: ID!) {
        getChannel(id: $id) {
          id
          name
          description
          createdBy {
            id
            username
          }
          members {
            items {
              user {
                id
              }
            }
          }
        }
      }`;

    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getChannel as CustomSpecificChannel;
  }

  async GetUserChannels(id: string): Promise<CustomGetUserChannelQuery> {
    const statement = `query GetUserChannels($id: ID!) {
      getUser(id: $id){
        channels {
          items {
            channel {
              id
              name
            }
          }
        }
      }
    }`;

    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getUser as CustomGetUserChannelQuery;
  }

  async GetChannelsList(limit?: number): Promise<CustomChannelsList> {
    const statement = `query GetChannelsList($limit: Int) {
      listChannels(limit: $limit) {
        items {
          id
          name
          members {
            items {
              id
              user {
                id
              }
            }
          }
        }
      }
    }`;

    const gqlAPIServiceArguments: any = {
      limit
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;

    return response.data.listChannels as CustomChannelsList;
  }
}
