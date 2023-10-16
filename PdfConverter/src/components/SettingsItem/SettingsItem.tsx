import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import ContentItem from '../ContentItem/ContentItem';

type Props = {
  name: string;
  label: string;
  onPress: () => void;
  icon?: React.ReactElement;
  withArrow?: boolean;
};

const SettingsItem = ({ label, withArrow, name, icon, onPress }: Props) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <ContentItem name={name} withArrow={withArrow} paddingHorizontal={16} icon={icon} onPress={onPress} />
    </>
  );
};

export default SettingsItem;
