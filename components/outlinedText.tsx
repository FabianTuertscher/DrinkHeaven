import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

type outlinedTextProps = {
  text: String;
  strokeWidth: Float;
  strokeColor: ColorValue;
  style: StyleProp<TextStyle>;
};

const OutlinedText = (props: outlinedTextProps) => {
  return (
    <View>
      <Text style={props.style}>{props.text}</Text>
      <Text style={[props.style, {color: props.strokeColor, fontSize: 52}]}>
        {props.text}
      </Text>
    </View>
  );
};

export default OutlinedText;
