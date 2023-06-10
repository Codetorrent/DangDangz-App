// import {Autocomplete, TextField} from '@mui/material';
import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  useConnect,
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
  useAddress,
} from '@thirdweb-dev/react-native';

import AppText from '../common/AppText';

import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const [userAccount, setUserAccount] = useState();

  const metamaskConfig = metamaskWallet();

  const connect = useConnect();
  const address = useAddress();

  const connectWallet = async () => {
    const wallet = await connect(metamaskConfig, {chainId: 80001});
  };

  return (
    <View style={styles.headerView}>
      <TouchableOpacity  style={styles.logoView } >
          <View style={ styles.logoBox }>
              <Image style={styles.logoImage} source={require('../../assets/images/dangdangz-logo.png')} />
          </View>
          <Text style={styles.logoText}>DangDangz</Text>
      </TouchableOpacity >
      <View style={styles.menuView}>
      <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconView}>
              <MaterialCommunityIcons  name="magnify" size={40}  />
            </View>
        </TouchableOpacity>
        {
          (address) ?
          <TouchableOpacity style={styles.menuItem} onPress={connectWallet} >
            <AppText>{address.slice(0, 6) + '...' + address.slice(-4)}</AppText>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.menuItem} onPress={connectWallet} >
            <AppText>Connect {"\n"} wallet</AppText>
            <View style={styles.iconView}>
              <MaterialCommunityIcons  name="wallet-outline" size={40}  />
            </View>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
  },
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
  headerView: {
    paddingVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 4,
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  logoImage: {
    width:40,
    height:40,
    transform: [{rotate:"180deg"}],
    position: "relative",
    top: 4,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'PassionOne-Regular',
  },
  menuView: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 0,
    marginRight: 4,
    marginLeft: 1,
    color: '#8a939b',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#e5e8eb',
    borderStyle: 'solid',
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 0,
    shadowColor: '#e5e8eb',
    shadowOpacity: 1,
  },
  iconView: {
    display: 'flex',
    borderWidth: 3,
    borderColor: '#e5e8eb',
    borderStyle: 'solid',
    borderRadius: 12,
    padding: 0,
    backgroundColor: '#e5e8eb',
  },
});


export default Header;
