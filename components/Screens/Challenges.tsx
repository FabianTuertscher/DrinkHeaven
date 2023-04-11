import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  WhoWouldRather: undefined;
  NeverHaveIEver: undefined;
  Challenges: undefined;
};

type challengesProps = NativeStackScreenProps<RootStackParamList, 'Challenges'>;

const Challenges = (props: challengesProps) => {
  return (
    <View>
      <Text>Challenges</Text>
    </View>
  );
};

export default Challenges;

const styles = StyleSheet.create({});
