import React from 'react';
import { View } from 'react-native';
import LetterL from '@assets/images/letterL.svg';
import { MainContainer } from '@src/components/MainContainer/MainContainer';
import LocationItem from '@src/components/LocationItem/LocationItem';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { locationItems } from './constants';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const LocationsScreen = ({ navigation }: Props) => {
  return (
    <MainContainer firstHeaderLetter={<LetterL />} headerText="ocations" padding>
      <View style={styles.itemsContainer}>
        {locationItems(navigation).map(item => (
          <LocationItem {...item} />
        ))}
      </View>
    </MainContainer>
  );
};

export default LocationsScreen;
