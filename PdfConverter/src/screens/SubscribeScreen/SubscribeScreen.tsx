import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, Pressable } from 'react-native';
import { Button } from '@src/components/Button/Button';
import { SubscribeOptionButton } from '@src/components/SubscripeOptionButton/SubscribeOptionButton';
import LetterA from '@assets/images/letterA.svg';
import LetterU from '@assets/images/letterU.svg';
import { subscribeButtons, subscribeItems } from './constants';
import { styles } from './styles';
import SubscribeItem from '@src/components/SubscribeItem/SubscribeItem';
import CloseButton from '@src/components/CloseButton/CloseButton';

const SubscribeScreen = () => {
  const onPressContinue = () => {};
  const onPressRestore = () => {};

  return (
    <SafeAreaView style={styles.saveArea}>
      <View style={styles.content}>
        <ImageBackground source={require('@assets/images/subscribeBackground.png')} style={styles.backgroundImage}>
          <View style={styles.topBar}>
            <CloseButton />
            <Pressable onPress={onPressRestore}>
              <Text style={styles.text}>Restore</Text>
            </Pressable>
          </View>
          <View style={styles.header}>
            <Text style={styles.titleText}>
              <LetterU />nlimited <LetterA />ccess
            </Text>
          </View>
          <View style={styles.itemsContainer}>
            {subscribeItems.map(item => (
              <SubscribeItem {...item} />
            ))}
          </View>
        </ImageBackground>
        <View style={styles.actionsContainer}>
          <Text style={styles.text}>Choose your plan:</Text>
          {subscribeButtons.map(item => (
            <SubscribeOptionButton {...item} />
          ))}
          <Button buttonText="continue" onPress={onPressContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubscribeScreen;
