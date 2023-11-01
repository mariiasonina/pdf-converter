import React, { PropsWithChildren, Reducer, useMemo, useReducer } from 'react';
// import {
//   getDataFromAsyncStorage,
//   saveDataToAsyncStorage,
// } from "@src/utils/storageHelpers";
import AppContext from './AppContext';
import { ActionType, StateProps, SubscribeType, FileToConvert } from './types';

const initialState: StateProps = {
  filesToConvert: [],
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
      filesToConvert: state.filesToConvert,
      subscriptionType: state.subscriptionType,
      hasUserSubscription: state.hasUserSubscription,
    }),
    [state.filesToConvert, state.subscriptionType, state.hasUserSubscription],
  );

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};

export default AppProvider;
