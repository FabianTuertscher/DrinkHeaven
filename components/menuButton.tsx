import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import TextStyles from '../TextStyles';

type menuButtonProps = {
  text: String;
  onPress: () => void;
};

const MenuButton = (props: menuButtonProps) => {
  return (
    <Pressable style={styles.pressable} onPress={props.onPress}>
      <View style={styles.view}>
        <Text style={TextStyles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  pressable: {
    flex: 0.2,
    width: '75%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 20,

    shadowColor: 'black',
    elevation: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    backgroundColor: '#EFC3E6',
  },
  view: {
    width: '97.5%',
    height: '90%',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    backgroundColor: '#9C89B8',
  },
});
