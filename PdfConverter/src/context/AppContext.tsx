import { createContext, useContext } from 'react';
import { FileToConvert, StateProps, SubscribeType } from './types';

type AppContextType = StateProps & {
  addItemToConvert: (item: FileToConvert) => void;
  clearItems: () => void;
  removeItem: (id: string) => void;
  changeSubscribeType: (subscriptionType: SubscribeType) => void;
};

const AppContext = createContext<AppContextType>({
  filesToConvert: [],
  subscriptionType: 'week',
  hasUserSubscription: false,
  addItemToConvert: () => {},
  clearItems: () => {},
  removeItem: () => {},
  changeSubscribeType: () => {},
});

export const useAppData = () => useContext(AppContext);

export default AppContext;
