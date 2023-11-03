import React from 'react';

export type SubscribeType = 'week' | 'month' | 'year';
export type MarginType = 'None' | 'Narrow' | 'Normal';

export type PDFSettingsType = {
  quality: number;
  margin: MarginType;
};

export type FileToConvert = {
  id: string;
  name: string;
  type: string;
  icon: React.ReactElement;
  uri: string;
};

export type FilesToConvertType = FileToConvert[];

export type StateProps = {
  filesToConvert: FilesToConvertType;
  pdfSettings: PDFSettingsType;
  subscriptionType: SubscribeType;
  hasUserSubscription: boolean;
};

export type ActionType =
  | { type: 'ADD_ITEM_TO_CONVERT'; item: FileToConvert }
  | { type: 'CLEAR_ITEMS' }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'CHANGE_MARGIN'; margin: MarginType }
  | { type: 'CHANGE_QUALITY'; quality: number }
  | { type: 'CHANGE_SUBSCRIPTION_TYPE'; subscriptionType: SubscribeType }
  | { type: 'CHANGE_HAS_USER_SUBSCRIPTION_FLAG'; hasUserSubscription: boolean };
