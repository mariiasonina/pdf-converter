import React from "react";

export type SubscribeType = 'week' | 'month' | 'year';

export type FileToConvert = {
  id: string;
  name: string;
  type: string;
  icon: React.ReactElement;
};

export type FilesToConvertType = FileToConvert[];

export type StateProps = {
  filesToConvert: FilesToConvertType;
  subscriptionType: SubscribeType;
  hasUserSubscription: boolean;
};

export type ActionType =
  | { type: 'ADD_ITEM_TO_CONVERT'; item: FileToConvert }
  | { type: 'CLEAR_ITEMS' }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'CHANGE_SUBSCRIPTION_TYPE'; subscriptionType: SubscribeType }
  | { type: 'CHANGE_HAS_USER_SUBSCRIPTION_FLAG'; hasUserSubscription: boolean };
