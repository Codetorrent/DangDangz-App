/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
} from '@thirdweb-dev/react-native';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/layout/Header';
import {
  Main,
  Minting,
} from './pages';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PuppyCard from './components/PuppyCard';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );

}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
          name="Minting" 
          component={Minting} 
          options={{ headerShown: false }}
          />
        </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          marginBottom: 25,
          position: 'absolute',
          elevation: 0
        },
        
      })}
      
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Stacks} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconView}>
          <MaterialCommunityIcons name="home" color={color} size={35} />
          </View>

        ),
      }}/>
      <Tab.Screen name="Game" component={SettingsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconView}>
            <MaterialCommunityIcons name="dog" color={color} size={35} />
          </View>
        ),
      }}/>
      <Tab.Screen name="MyDangDangz" component={PuppyCard} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconView}>
        <FontAwesome5 name="dog" color={color} size={30} />
          </View>
        ),
      }}/>
      <Tab.Screen name="MyDangDang" component={PuppyCard} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={{...styles.iconView}}>
        <FontAwesome5 name="store" color={color} size={25} />
          </View>
        ),
      }}/>
      <Tab.Screen name="MyDangDans" component={PuppyCard} options={{
        tabBarIcon: ({ color, size }) => (
          <View style={styles.iconView}>
        <MaterialCommunityIcons name="wallet-outline" color={color} size={35} />
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <ThirdwebProvider
        activeChain="binance-testnet"
        supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>

        <Header />

        <Tabs />

    </ThirdwebProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconView: {
    display: 'flex',
    backgroundColor:'#77717180',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'  
  }
});

export default App;