import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { SketchCanvasRef, SketchCanvas } from 'rn-perfect-sketch-canvas';
import { NavigationProp } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import EditorButton from '@src/components/EditorButton/EditorButton';
import { styles } from './styles';
import { strokeColors } from './constants';
import { colors } from '@src/global/colors';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const SignatureScreen = ({ navigation }: Props) => {
  let canvasRef = useRef<SketchCanvasRef>(null);
  const [activeColor, setActiveColor] = useState(strokeColors[0]);
  const [strokeWidth, setStrokeWidth] = useState(3);

  useEffect(() => {
    redrawSignature();
  }, [strokeWidth, activeColor]);

  const onPressDone = () => {
    // TODO: save signature to storage
    canvasRef.current?.toImage();
    navigation.goBack();
  };

  const onPressClear = () => {
    canvasRef.current?.reset();
  };

  const redrawSignature = () => {
    canvasRef.current?.addPoints(canvasRef.current?.toPoints(), { strokeColor: activeColor, strokeWidth });
  };

  return (
    <SafeAreaView style={styles.saveArea}>
      <View style={styles.topLine}>
        <EditorButton text="cancel" onPress={navigation.goBack} />
        <Text style={styles.text}>add signature</Text>
        <EditorButton text="done" onPress={onPressDone} />
      </View>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={activeColor}
        strokeWidth={strokeWidth}
        containerStyle={styles.container}
      />
      <View style={styles.topLine}>
        <EditorButton text="clear" onPress={onPressClear} />
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={2}
          maximumValue={10}
          minimumTrackTintColor={colors.blue}
          maximumTrackTintColor={colors.graphite}
          onValueChange={setStrokeWidth}
        />
        <View style={styles.colorsContainer}>
          {strokeColors.map(color => (
            <Pressable
              key={color}
              onPress={() => setActiveColor(color)}
              style={[styles.color, { backgroundColor: color }, activeColor === color && styles.borderColor]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignatureScreen;
