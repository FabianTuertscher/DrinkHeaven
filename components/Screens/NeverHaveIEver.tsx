import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  WhoWouldRather: undefined;
  NeverHaveIEver: undefined;
  Challenges: undefined;
};

type neverHaveIEverProps = NativeStackScreenProps<
  RootStackParamList,
  'NeverHaveIEver'
>;

const NeverHaveIEver = (props: neverHaveIEverProps) => {
  return (
    <View>
      <Text>NeverHaveIEver</Text>
    </View>
  );
};

export default NeverHaveIEver;

const styles = StyleSheet.create({});
