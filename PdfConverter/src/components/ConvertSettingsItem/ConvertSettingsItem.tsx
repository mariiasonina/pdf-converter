import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import ContentItem from '../ContentItem/ContentItem';

type Props = {
  name: string;
  label: string;
  withArrow?: boolean;
};

const ConvertSettingsItem = ({ label, withArrow, name }: Props) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <ContentItem name={name} withArrow={withArrow} paddingHorizontal={16} />
    </>
  );
};

export default ConvertSettingsItem;
