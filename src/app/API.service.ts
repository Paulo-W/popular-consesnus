/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  username: string;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateChannelInput = {
  id?: string | null;
  name: string;
  channelCreatedById?: string | null;
};

export type ModelChannelConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelChannelConditionInput | null> | null;
  or?: Array<ModelChannelConditionInput | null> | null;
  not?: ModelChannelConditionInput | null;
};

export type UpdateChannelInput = {
  id: string;
  name?: string | null;
  channelCreatedById?: string | null;
};

export type DeleteChannelInput = {
  id?: string | null;
};

export type CreateUserChannelInput = {
  id?: string | null;
  userChannelUserId?: string | null;
  userChannelChannelId?: string | null;
};

export type ModelUserChannelConditionInput = {
  and?: Array<ModelUserChannelConditionInput | null> | null;
  or?: Array<ModelUserChannelConditionInput | null> | null;
  not?: ModelUserChannelConditionInput | null;
};

export type UpdateUserChannelInput = {
  id: string;
  userChannelUserId?: string | null;
  userChannelChannelId?: string | null;
};

export type DeleteUserChannelInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelChannelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelChannelFilterInput | null> | null;
  or?: Array<ModelChannelFilterInput | null> | null;
  not?: ModelChannelFilterInput | null;
};

export type ModelUserChannelFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelUserChannelFilterInput | null> | null;
  or?: Array<ModelUserChannelFilterInput | null> | null;
  not?: ModelUserChannelFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserChannelMutation = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserChannelMutation = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserChannelMutation = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetChannelQuery = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListChannelsQuery = {
  __typename: "ModelChannelConnection";
  items: Array<{
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserChannelQuery = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserChannelsQuery = {
  __typename: "ModelUserChannelConnection";
  items: Array<{
    __typename: "UserChannel";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    channel: {
      __typename: "Channel";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  members: {
    __typename: "ModelUserChannelConnection";
    items: Array<{
      __typename: "UserChannel";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserChannelSubscription = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserChannelSubscription = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserChannelSubscription = {
  __typename: "UserChannel";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    channels: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    members: {
      __typename: "ModelUserChannelConnection";
      nextToken: string | null;
    } | null;
    createdBy: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateChannel(
    input: CreateChannelInput,
    condition?: ModelChannelConditionInput
  ): Promise<CreateChannelMutation> {
    const statement = `mutation CreateChannel($input: CreateChannelInput!, $condition: ModelChannelConditionInput) {
        createChannel(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChannelMutation>response.data.createChannel;
  }
  async UpdateChannel(
    input: UpdateChannelInput,
    condition?: ModelChannelConditionInput
  ): Promise<UpdateChannelMutation> {
    const statement = `mutation UpdateChannel($input: UpdateChannelInput!, $condition: ModelChannelConditionInput) {
        updateChannel(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChannelMutation>response.data.updateChannel;
  }
  async DeleteChannel(
    input: DeleteChannelInput,
    condition?: ModelChannelConditionInput
  ): Promise<DeleteChannelMutation> {
    const statement = `mutation DeleteChannel($input: DeleteChannelInput!, $condition: ModelChannelConditionInput) {
        deleteChannel(input: $input, condition: $condition) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChannelMutation>response.data.deleteChannel;
  }
  async CreateUserChannel(
    input: CreateUserChannelInput,
    condition?: ModelUserChannelConditionInput
  ): Promise<CreateUserChannelMutation> {
    const statement = `mutation CreateUserChannel($input: CreateUserChannelInput!, $condition: ModelUserChannelConditionInput) {
        createUserChannel(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserChannelMutation>response.data.createUserChannel;
  }
  async UpdateUserChannel(
    input: UpdateUserChannelInput,
    condition?: ModelUserChannelConditionInput
  ): Promise<UpdateUserChannelMutation> {
    const statement = `mutation UpdateUserChannel($input: UpdateUserChannelInput!, $condition: ModelUserChannelConditionInput) {
        updateUserChannel(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserChannelMutation>response.data.updateUserChannel;
  }
  async DeleteUserChannel(
    input: DeleteUserChannelInput,
    condition?: ModelUserChannelConditionInput
  ): Promise<DeleteUserChannelMutation> {
    const statement = `mutation DeleteUserChannel($input: DeleteUserChannelInput!, $condition: ModelUserChannelConditionInput) {
        deleteUserChannel(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserChannelMutation>response.data.deleteUserChannel;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetChannel(id: string): Promise<GetChannelQuery> {
    const statement = `query GetChannel($id: ID!) {
        getChannel(id: $id) {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChannelQuery>response.data.getChannel;
  }
  async ListChannels(
    filter?: ModelChannelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChannelsQuery> {
    const statement = `query ListChannels($filter: ModelChannelFilterInput, $limit: Int, $nextToken: String) {
        listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChannelsQuery>response.data.listChannels;
  }
  async GetUserChannel(id: string): Promise<GetUserChannelQuery> {
    const statement = `query GetUserChannel($id: ID!) {
        getUserChannel(id: $id) {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserChannelQuery>response.data.getUserChannel;
  }
  async ListUserChannels(
    filter?: ModelUserChannelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserChannelsQuery> {
    const statement = `query ListUserChannels($filter: ModelUserChannelFilterInput, $limit: Int, $nextToken: String) {
        listUserChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            channel {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserChannelsQuery>response.data.listUserChannels;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          channels {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateChannelListener: Observable<
    OnCreateChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChannel {
        onCreateChannel {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateChannelSubscription>;

  OnUpdateChannelListener: Observable<
    OnUpdateChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChannel {
        onUpdateChannel {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateChannelSubscription>;

  OnDeleteChannelListener: Observable<
    OnDeleteChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChannel {
        onDeleteChannel {
          __typename
          id
          name
          members {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdBy {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteChannelSubscription>;

  OnCreateUserChannelListener: Observable<
    OnCreateUserChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserChannel {
        onCreateUserChannel {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserChannelSubscription>;

  OnUpdateUserChannelListener: Observable<
    OnUpdateUserChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserChannel {
        onUpdateUserChannel {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserChannelSubscription>;

  OnDeleteUserChannelListener: Observable<
    OnDeleteUserChannelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserChannel {
        onDeleteUserChannel {
          __typename
          id
          user {
            __typename
            id
            username
            channels {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            members {
              __typename
              nextToken
            }
            createdBy {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserChannelSubscription>;
}