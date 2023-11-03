import React, { PropsWithChildren, Reducer, useMemo, useReducer } from 'react';
// import {
//   getDataFromAsyncStorage,
//   saveDataToAsyncStorage,
// } from "@src/utils/storageHelpers";
import AppContext from './AppContext';
import { ActionType, StateProps, SubscribeType, FileToConvert, MarginType } from './types';

const initialState: StateProps = {
  filesToConvert: [],
  pdfSettings: {
    quality: 100,
    margin: 'None',
  },
  subscriptionType: 'week',
  hasUserSubscription: false,
};

const reducer: Reducer<StateProps, ActionType> = (prevState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CONVERT':
      prevState.filesToConvert.push(action.item);

      return {
        ...prevState,
        filesToConvert: [...prevState.filesToConvert],
      };
    case 'CLEAR_ITEMS':
      return {
        ...prevState,
        filesToConvert: [],
      };
    case 'REMOVE_ITEM':
      const targetIndex = prevState.filesToConvert.findIndex(({ id }) => id === action.id);

      if (targetIndex >= 0) {
        prevState.filesToConvert.splice(targetIndex, 1);
      }

      return {
        ...prevState,
        filesToConvert: [...prevState.filesToConvert],
      };
    case 'CHANGE_SUBSCRIPTION_TYPE':
      return {
        ...prevState,
        subscriptionType: action.subscriptionType,
      };
    case 'CHANGE_MARGIN':
      return {
        ...prevState,
        pdfSettings: {
          ...prevState.pdfSettings,
          margin: action.margin,
        },
      };
    case 'CHANGE_QUALITY':
      return {
        ...prevState,
        pdfSettings: {
          ...prevState.pdfSettings,
          quality: action.quality,
        },
      };
    default:
      return { ...prevState };
  }
};

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appContext = useMemo(
    () => ({
      addItemToConvert: (item: FileToConvert) => {
        dispatch({ type: 'ADD_ITEM_TO_CONVERT', item });
      },
      clearItems: () => {
        dispatch({ type: 'CLEAR_ITEMS' });
      },
      removeItem: (id: string) => {
        dispatch({ type: 'REMOVE_ITEM', id });
      },
      changeSubscribeType: (subscriptionType: SubscribeType) => {
        dispatch({ type: 'CHANGE_SUBSCRIPTION_TYPE', subscriptionType });
      },
      changePdfMargin: (margin: MarginType) => {
        dispatch({ type: 'CHANGE_MARGIN', margin });
      },
      changePdfQuality: (quality: number) => {
        dispatch({ type: 'CHANGE_QUALITY', quality });
      },
      filesToConvert: state.filesToConvert,
      pdfSettings: state.pdfSettings,
      subscriptionType: state.subscriptionType,
      hasUserSubscription: state.hasUserSubscription,
    }),
    [state.filesToConvert, state.subscriptionType, state.hasUserSubscription, state.pdfSettings],
  );

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export default AppProvider;
