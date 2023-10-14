import React from 'react';
import { View } from 'react-native';
import LetterL from '@assets/images/letterL.svg';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LocationItem from '@src/components/LocationItem/LocationItem';
import { locationItems } from './constants';
import { styles } from './styles';

const LocationsScreen = () => {
  return (
    <MainContainer firstHeaderLetter={<LetterL />} headerText="ocations" padding>
      <View style={styles.itemsContainer}>
        {locationItems.map(item => (
          <LocationItem {...item} />
        ))}
      </View>
    </MainContainer>
  );
};

export default LocationsScreen;
