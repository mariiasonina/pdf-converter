import { SubscribeType } from '@src/context/types';
import ShareIcon from '@assets/icons/shareIcon.svg';
import MultipleIcon from '@assets/icons/multipleIcon.svg';
import InfinityIcon from '@assets/icons/infinityIcon.svg';
import { colors } from '@src/global/colors';

type SubscribeButtonsType = {
  key: number;
  type: SubscribeType;
  priceText: string;
  descriptionText: string;
  label?: string;
  labelColor?: string;
}[];

export const subscribeButtons: SubscribeButtonsType = [
  {
    key: 0,
    type: 'week',
    priceText: '$4.99 / week',
    descriptionText: 'Get 3 days of trial free',
  },
  {
    key: 1,
    type: 'month',
    priceText: '$14.99 / month',
    descriptionText: 'Unlock the power of PDF conversion',
    label: 'popular',
    labelColor: colors.red,
  },
  {
    key: 2,
    type: 'year',
    priceText: '$29.99 / year',
    descriptionText: 'Pay once and enjoy a year',
    label: 'save 80%',
    labelColor: colors.blue,
  },
];

export const subscribeItems = [
  {
    key: 0,
    icon: <InfinityIcon />,
    mainText: 'unlimited conversions',
    subText: 'Convert as many PDFs as you need, without restrictions.',
  },
  {
    key: 1,
    icon: <ShareIcon width={20} height={20} />,
    mainText: 'easy sharing',
    subText: 'Simplify collaboration by effortlessly sharing your converted documents.',
  },
  {
    key: 2,
    icon: <MultipleIcon />,
    mainText: 'multipage PDF',
    subText: 'Seamlessly handle multipage PDF files with our tools.',
  },
];
