import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import AddFolderIcon from '@assets/icons/addFolderIcon.svg';
import { FilesToConvertType } from '@src/context/types';
import { AboutItemsType } from '@src/screens/SettingsScreen/constants';
import { styles } from './styles';
import ContentItem from '../ContentItem/ContentItem';

type Props = {
  labelText: string;
  content: FilesToConvertType | AboutItemsType;
  isImageType?: boolean;
};

const ContentItemsContainer = ({ labelText, isImageType, content }: Props) => {
  return (
    <>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.itemsContainer}>
        {content.map(({ id, name, icon }, index) => (
          <Fragment key={id}>
            {!!index && <View style={styles.divider} />}
            <ContentItem name={name} onPress={() => {}} icon={icon} withArrow />
          </Fragment>
        ))}
        {isImageType && (
          <>
            <View style={styles.divider} />
            <ContentItem icon={<AddFolderIcon />} name="add more images" onPress={() => {}} withArrow />
          </>
        )}
      </View>
    </>
  );
};

export default ContentItemsContainer;
