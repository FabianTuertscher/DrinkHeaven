import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextStyles from '../../TextStyles';
import MenuButton from '../../components/menuButton';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  WhoWouldRather: undefined;
  NeverHaveIEver: undefined;
  Challenges: undefined;
};

type homeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

function HomeScreen(props: homeScreenProps): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#B8BEDD" />
      <LinearGradient
        colors={['#B8BEDD', '#F0A6CA']}
        start={{x: 0, y: 0.3}}
        end={{x: 0.95, y: 1}}>
        <View style={styles.appContainer}>
          <View style={styles.logoContainer}>
            <Text style={TextStyles.heading}>Drink Heaven</Text>
            <Image source={require('../../images/drink-heaven-logo.png')} />
          </View>
          <Text style={[TextStyles.heading, styles.text]}>Select Mode</Text>
          <View style={styles.buttonContainer}>
            <MenuButton
              text="Never have I ever"
              onPress={() => props.navigation.navigate('NeverHaveIEver')}
            />
            <MenuButton
              text="Who would rather"
              onPress={() => props.navigation.navigate('WhoWouldRather')}
            />
            <MenuButton
              text="Challenges"
              onPress={() => props.navigation.navigate('Challenges')}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  buttonContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
