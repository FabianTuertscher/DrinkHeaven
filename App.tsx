import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import Challenges from './components/Screens/Challenges';
import WhoWouldRather from './components/Screens/WhoWouldRather';
import NeverHaveIEver from './components/Screens/NeverHaveIEver';

type RootStackParamList = {
  HomeScreen: undefined;
  WhoWouldRather: undefined;
  NeverHaveIEver: undefined;
  Challenges: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WhoWouldRather" component={WhoWouldRather} />
        <Stack.Screen name="NeverHaveIEver" component={NeverHaveIEver} />
        <Stack.Screen name="Challenges" component={Challenges} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
