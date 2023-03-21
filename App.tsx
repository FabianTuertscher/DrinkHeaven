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
import TextStyles from './TextStyles';
import MenuButton from './components/menuButton';

function App(): JSX.Element {
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
            <Image source={require('./images/drink-heaven-logo.png')} />
          </View>
          <Text style={[TextStyles.heading, styles.text]}>Select Mode</Text>
          <View style={styles.buttonContainer}>
            <MenuButton text="Never have I ever" />
            <MenuButton text="Who would rather" />
            <MenuButton text="Challenges" />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default App;

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
