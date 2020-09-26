import {Injectable} from '@angular/core';
import API, {graphqlOperation} from '@aws-amplify/api';
import {Observable} from 'zen-observable-ts';
import {
  CustomChannelDebate,
  CustomChannelMembers,
  CustomChannelsList,
  CustomCreateChannel,
  CustomDebateList,
  CustomGetUserChannelQuery,
  CustomSpecificChannel,
  DebateTeams,
  MappedDebate,
  MessageInfo
} from './custom-types';


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

  OnCreateMessageListener: Observable<MessageInfo> = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          id
          teamId {
            id
          }
          createdBy {
            id
            username
          }
          likeUsers
          dislikeUsers
          content
          createdAt
          image
        }
      }`
    )
  ) as Observable<MessageInfo>;


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

  async FindDebateById(id: string): Promise<MappedDebate> {
    const statement = `query GetFullDebates($id: ID!) {
        getDebate(id: $id) {
          id
          title
          description
          tag
          days
          createdAt
          team1 {
            name
          }
          team2 {
            name
          }
          createdBy {
            id
            username
          }
          channel {
            id
            name
          }
        }
      }`;

    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;

    return response.data.getDebate as MappedDebate;
  }

  async GetDetailedDebates(id: string): Promise<CustomDebateList> {
    const statement = `query GetDebates($id: ID!) {
        getUser(id: $id) {
          channels {
            items {
              channel {
                id
                name
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
                    team1 {
                      name
                    }
                    team2 {
                      name
                    }
                  }
                }
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

    return response.data.getUser as CustomDebateList;
  }

  async GetDetailedChannelDebates(id: string): Promise<CustomChannelDebate> {
    const statement = `query GetDetailChannelDebates($id: ID!) {
        getChannel(id: $id) {
          id
          name
          debates {
            items {
              id
              title
              description
              days
              createdAt
              createdBy {
                username
              }
              team1 {
                name
              }
              team2 {
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

    return response.data.getChannel as CustomChannelDebate;
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


  async GetDebateTeams(id: string): Promise<DebateTeams> {
    const statement = `query GetDebateTeams($id: ID!) {
        getDebate(id: $id) {
          team1 {
            id
            members {
              items {
                id
                user {
                  id
                }
                team {
                  id
                }
              }
            }
            messages {
              items {
                likeUsers
                dislikeUsers
              }
            }
          }
          team2 {
            id
            members {
              items {
                id
                user {
                  id
                }
                team {
                  id
                }
              }
            }
            messages {
              items {
                likeUsers
                dislikeUsers
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

    return response.data.getDebate as DebateTeams;
  }


  async GetTeamMessages(id: string): Promise<MessageInfo[]> {
    const statement = `query GetMessages($id: ID!) {
        getTeam(id: $id) {
          messages {
            items {
              id
              createdBy {
                id
                username
              }
              likeUsers
              dislikeUsers
              content
              createdAt
              image
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

    return response.data.getTeam.messages.items as MessageInfo[];
  }
}
