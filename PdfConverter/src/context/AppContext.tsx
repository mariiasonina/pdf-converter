import { createContext, useContext } from 'react';
import { FileToConvert, MarginType, StateProps, SubscribeType } from './types';

type AppContextType = StateProps & {
  addItemToConvert: (item: FileToConvert) => void;
  clearItems: () => void;
  removeItem: (id: string) => void;
  changePdfMargin: (margin: MarginType) => void;
  changePdfQuality: (quality: number) => void;
  changeSubscribeType: (subscriptionType: SubscribeType) => void;
};

const AppContext = createContext<AppContextType>({
  filesToConvert: [],
  pdfSettings: {
    quality: 100,
    margin: 'None',
  },
  subscriptionType: 'week',
  hasUserSubscription: false,
  addItemToConvert: () => {},
  clearItems: () => {},
  removeItem: () => {},
  changeSubscribeType: () => {},
  changePdfMargin: () => {},
  changePdfQuality: () => {},
});

export const useAppData = () => useContext(AppContext);

export default AppContext;
