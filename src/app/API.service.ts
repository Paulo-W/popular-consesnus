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
  description?: string | null;
  channelCreatedById?: string | null;
};

export type ModelChannelConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelChannelConditionInput | null> | null;
  or?: Array<ModelChannelConditionInput | null> | null;
  not?: ModelChannelConditionInput | null;
};

export type UpdateChannelInput = {
  id: string;
  name?: string | null;
  description?: string | null;
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

export type CreateDebateInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  tag?: string | null;
  days?: number | null;
  date?: string | null;
  debateTeam1Id?: string | null;
  debateTeam2Id?: string | null;
  debateCreatedById?: string | null;
  debateChannelId?: string | null;
};

export type ModelDebateConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  tag?: ModelStringInput | null;
  days?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelDebateConditionInput | null> | null;
  or?: Array<ModelDebateConditionInput | null> | null;
  not?: ModelDebateConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDebateInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  tag?: string | null;
  days?: number | null;
  date?: string | null;
  debateTeam1Id?: string | null;
  debateTeam2Id?: string | null;
  debateCreatedById?: string | null;
  debateChannelId?: string | null;
};

export type DeleteDebateInput = {
  id?: string | null;
};

export type CreateTeamInput = {
  id?: string | null;
  name: string;
  team?: number | null;
  teamDebateId?: string | null;
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null;
  team?: ModelIntInput | null;
  and?: Array<ModelTeamConditionInput | null> | null;
  or?: Array<ModelTeamConditionInput | null> | null;
  not?: ModelTeamConditionInput | null;
};

export type UpdateTeamInput = {
  id: string;
  name?: string | null;
  team?: number | null;
  teamDebateId?: string | null;
};

export type DeleteTeamInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  content?: string | null;
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
};

export type DeleteMessageInput = {
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
  description?: ModelStringInput | null;
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

export type ModelDebateFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  tag?: ModelStringInput | null;
  days?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelDebateFilterInput | null> | null;
  or?: Array<ModelDebateFilterInput | null> | null;
  not?: ModelDebateFilterInput | null;
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  team?: ModelIntInput | null;
  and?: Array<ModelTeamFilterInput | null> | null;
  or?: Array<ModelTeamFilterInput | null> | null;
  not?: ModelTeamFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
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
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
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
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChannelMutation = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDebateMutation = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDebateMutation = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDebateMutation = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTeamMutation = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTeamMutation = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTeamMutation = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  channels: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
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
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetChannelQuery = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
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
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDebateQuery = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDebatesQuery = {
  __typename: "ModelDebateConnection";
  items: Array<{
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamQuery = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTeamsQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type UserByNameQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
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
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
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
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
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
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChannelSubscription = {
  __typename: "Channel";
  id: string;
  name: string;
  description: string | null;
  createdBy: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  members: {
    __typename: "ModelUserChannelConnection";
    nextToken: string | null;
  } | null;
  debates: {
    __typename: "ModelDebateConnection";
    nextToken: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null;
  channel: {
    __typename: "Channel";
    id: string;
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDebateSubscription = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDebateSubscription = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDebateSubscription = {
  __typename: "Debate";
  id: string;
  title: string;
  description: string | null;
  team1: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team2: {
    __typename: "Team";
    id: string;
    name: string;
    team: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tag: string | null;
  days: number | null;
  date: string | null;
  createdBy: {
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
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTeamSubscription = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTeamSubscription = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTeamSubscription = {
  __typename: "Team";
  id: string;
  name: string;
  debate: {
    __typename: "Debate";
    id: string;
    title: string;
    description: string | null;
    tag: string | null;
    days: number | null;
    date: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  team: number | null;
  members: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  messages: Array<{
    __typename: "Message";
    id: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string | null;
  likeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  dislikeUsers: Array<{
    __typename: "User";
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
            nextToken
          }
          debates {
            __typename
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
            nextToken
          }
          debates {
            __typename
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
            nextToken
          }
          debates {
            __typename
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
  async CreateDebate(
    input: CreateDebateInput,
    condition?: ModelDebateConditionInput
  ): Promise<CreateDebateMutation> {
    const statement = `mutation CreateDebate($input: CreateDebateInput!, $condition: ModelDebateConditionInput) {
        createDebate(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
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
    return <CreateDebateMutation>response.data.createDebate;
  }
  async UpdateDebate(
    input: UpdateDebateInput,
    condition?: ModelDebateConditionInput
  ): Promise<UpdateDebateMutation> {
    const statement = `mutation UpdateDebate($input: UpdateDebateInput!, $condition: ModelDebateConditionInput) {
        updateDebate(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
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
    return <UpdateDebateMutation>response.data.updateDebate;
  }
  async DeleteDebate(
    input: DeleteDebateInput,
    condition?: ModelDebateConditionInput
  ): Promise<DeleteDebateMutation> {
    const statement = `mutation DeleteDebate($input: DeleteDebateInput!, $condition: ModelDebateConditionInput) {
        deleteDebate(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
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
    return <DeleteDebateMutation>response.data.deleteDebate;
  }
  async CreateTeam(
    input: CreateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<CreateTeamMutation> {
    const statement = `mutation CreateTeam($input: CreateTeamInput!, $condition: ModelTeamConditionInput) {
        createTeam(input: $input, condition: $condition) {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
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
    return <CreateTeamMutation>response.data.createTeam;
  }
  async UpdateTeam(
    input: UpdateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<UpdateTeamMutation> {
    const statement = `mutation UpdateTeam($input: UpdateTeamInput!, $condition: ModelTeamConditionInput) {
        updateTeam(input: $input, condition: $condition) {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
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
    return <UpdateTeamMutation>response.data.updateTeam;
  }
  async DeleteTeam(
    input: DeleteTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<DeleteTeamMutation> {
    const statement = `mutation DeleteTeam($input: DeleteTeamInput!, $condition: ModelTeamConditionInput) {
        deleteTeam(input: $input, condition: $condition) {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
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
    return <DeleteTeamMutation>response.data.deleteTeam;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
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
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
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
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
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
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          channels {
            __typename
            nextToken
          }
          debates {
            __typename
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
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
            description
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
  async GetDebate(id: string): Promise<GetDebateQuery> {
    const statement = `query GetDebate($id: ID!) {
        getDebate(id: $id) {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
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
    return <GetDebateQuery>response.data.getDebate;
  }
  async ListDebates(
    filter?: ModelDebateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDebatesQuery> {
    const statement = `query ListDebates($filter: ModelDebateFilterInput, $limit: Int, $nextToken: String) {
        listDebates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            tag
            days
            date
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
    return <ListDebatesQuery>response.data.listDebates;
  }
  async GetTeam(id: string): Promise<GetTeamQuery> {
    const statement = `query GetTeam($id: ID!) {
        getTeam(id: $id) {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
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
    return <GetTeamQuery>response.data.getTeam;
  }
  async ListTeams(
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTeamsQuery> {
    const statement = `query ListTeams($filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
        listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            team
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
    return <ListTeamsQuery>response.data.listTeams;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
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
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
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
    return <ListMessagesQuery>response.data.listMessages;
  }
  async UserByName(
    username?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByNameQuery> {
    const statement = `query UserByName($username: String, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        userByName(username: $username, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <UserByNameQuery>response.data.userByName;
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
            nextToken
          }
          debates {
            __typename
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
            nextToken
          }
          debates {
            __typename
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
            nextToken
          }
          debates {
            __typename
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
            nextToken
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
            nextToken
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
          description
          createdBy {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          members {
            __typename
            nextToken
          }
          debates {
            __typename
            nextToken
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
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
            createdAt
            updatedAt
          }
          channel {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserChannelSubscription>;

  OnCreateDebateListener: Observable<OnCreateDebateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDebate {
        onCreateDebate {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDebateSubscription>;

  OnUpdateDebateListener: Observable<OnUpdateDebateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDebate {
        onUpdateDebate {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDebateSubscription>;

  OnDeleteDebateListener: Observable<OnDeleteDebateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDebate {
        onDeleteDebate {
          __typename
          id
          title
          description
          team1 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          team2 {
            __typename
            id
            name
            team
            createdAt
            updatedAt
          }
          tag
          days
          date
          createdBy {
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
            description
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDebateSubscription>;

  OnCreateTeamListener: Observable<OnCreateTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTeam {
        onCreateTeam {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTeamSubscription>;

  OnUpdateTeamListener: Observable<OnUpdateTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTeam {
        onUpdateTeam {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTeamSubscription>;

  OnDeleteTeamListener: Observable<OnDeleteTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTeam {
        onDeleteTeam {
          __typename
          id
          name
          debate {
            __typename
            id
            title
            description
            tag
            days
            date
            createdAt
            updatedAt
          }
          team
          members {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          messages {
            __typename
            id
            content
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTeamSubscription>;

  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnUpdateMessageListener: Observable<
    OnUpdateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateMessageSubscription>;

  OnDeleteMessageListener: Observable<
    OnDeleteMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          user {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          content
          likeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          dislikeUsers {
            __typename
            id
            username
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteMessageSubscription>;
}
