import TermsIcon from '@assets/icons/termsIcon.svg';
import PrivacyIcon from '@assets/icons/privacyIcon.svg';
import HelpIcon from '@assets/icons/helpIcon.svg';
import ShareIcon from '@assets/icons/settingsShareIcon.svg';

export type AboutItemsType = {
  id: number;
  icon: React.ReactElement;
  name: string;
  onPress: () => void;
}[];

export const aboutItems: AboutItemsType = [
  {
    id: 0,
    icon: <TermsIcon />,
    name: 'Terms of Use',
    onPress: () => {},
  },
  {
    id: 1,
    icon: <PrivacyIcon />,
    name: 'Privacy Policy',
    onPress: () => {},
  },
  {
    id: 2,
    icon: <HelpIcon />,
    name: 'FAQ and Support',
    onPress: () => {},
  },
  {
    id: 3,
    icon: <ShareIcon />,
    name: 'Share',
    onPress: () => {},
  },
];
