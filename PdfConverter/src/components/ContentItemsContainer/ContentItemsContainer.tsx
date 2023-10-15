import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ContentItem from '../ContentItem/ContentItem';

type Props = {
  labelText: string;
  content: { key: number; icon: React.ReactElement; name: string; withArrow?: boolean }[];
};

const ContentItemsContainer = ({ labelText, content }: Props) => {
  return (
    <>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.itemsContainer}>
        {content.map((item, index) => (
          <Fragment key={item.key}>
            {!!index && <View style={styles.divider} />}
            <ContentItem {...item} />
          </Fragment>
        ))}
      </View>
    </>
  );
};

export default ContentItemsContainer;
