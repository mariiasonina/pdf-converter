import NoneImage from '@assets/images/none.svg';
import NarrowImage from '@assets/images/narrow.svg';
import NormalImage from '@assets/images/normal.svg';
import { MarginType } from '@src/context/types';

type MarginsType = { key: number; icon: React.ReactElement; marginType: MarginType }[];

export const margins: MarginsType = [
  { key: 0, icon: <NormalImage />, marginType: 'Normal' },
  { key: 1, icon: <NarrowImage />, marginType: 'Narrow' },
  { key: 2, icon: <NoneImage />, marginType: 'None' },
];
