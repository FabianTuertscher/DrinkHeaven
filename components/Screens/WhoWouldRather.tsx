import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  WhoWouldRather: undefined;
  NeverHaveIEver: undefined;
  Challenges: undefined;
};

type whoWouldRatherProps = NativeStackScreenProps<
  RootStackParamList,
  'WhoWouldRather'
>;

const WhoWouldRather = (props: whoWouldRatherProps) => {
  return (
    <View>
      <Text>WhoWouldRather</Text>
    </View>
  );
};

export default WhoWouldRather;

const styles = StyleSheet.create({});
