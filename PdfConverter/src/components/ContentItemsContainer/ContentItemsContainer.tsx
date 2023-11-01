import React, { Fragment } from 'react';
import { View, Text, ActionSheetIOS } from 'react-native';
import AddFolderIcon from '@assets/icons/addFolderIcon.svg';
import { FilesToConvertType } from '@src/context/types';
import { AboutItemsType } from '@src/screens/SettingsScreen/constants';
import { usePickFiles } from '@src/hooks/usePickFiles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';
import ContentItem from '../ContentItem/ContentItem';

type Props = {
  labelText: string;
  content: FilesToConvertType | AboutItemsType;
  isImageType?: boolean;
};

const ContentItemsContainer = ({ labelText, isImageType, content }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { onPressGallery, onPressFiles, onPressCamera } = usePickFiles(navigation);

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Gallery', 'Camera'],
        title: 'Add new image',
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          onPressGallery();
        } else if (buttonIndex === 2) {
          onPressCamera();
        }
      },
    );

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
            <ContentItem icon={<AddFolderIcon />} name="add more images" onPress={onPress} withArrow />
          </>
        )}
      </View>
    </>
  );
};

export default ContentItemsContainer;
