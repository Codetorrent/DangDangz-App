// import {Autocomplete, TextField} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {MdOutlineAccountBalanceWallet, MdOutlineSearch} from 'react-icons/md';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import AppText from '../components/common/AppText';

const Header = () => {
  const [userAccount, setUserAccount] = useState();

  const onClickLogo = () => {};

  return (
    // <View >
    //   <AppText style={styles.test}>test bold</AppText>
    // </View>
    <View style={styles.headerView}>
        <View accessibilityRole='button' onPress={onClickLogo} style={styles.logoView}>
            <View style={ styles.logoBox }>
                <Image style={styles.logoImage} source={require('../assets/images/dangdangz-logo.png')} />
            </View>
            <Text style={styles.logoText}>DangDangz</Text>
        </View>

        
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
  },
  headerView: {
    paddingVertical: '2',
    paddingHorizontal: '4',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoView: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4',
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowColor: '#aeabab',
    shadowOpacity: 1,
  },
  logoImage: {
    width:40,
    height:40,
    transform: [{rotate:"180deg"}],
    position: "relative",
    top: 4,
  },
  logoTitle: {
    fontSize: 24,
    marginLeft: 8,
    fontFamily: 'PassionOne-Regular',
  },
  menuView: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuItem: {
    display: 'flex',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginRight: 4,
    marginBottom: 0,
    marginLeft: 4,
    color: '#8a939b',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#e5e8eb',
    borderStyle: 'solid',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 0,
    shadowColor: '#e5e8eb',
    shadowOpacity: 1,
    cursor: 'pointer',
  },
  iconView: {
    display: 'flex',
    borderWidth: 3,
    borderColor: '#e5e8eb',
    borderStyle: 'solid',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    backgroundColor: '#e5e8eb',
    fontSize: 3,
  },
});

// const SearchView = styled.div`
//   flex: 1;
//   border: 3px solid #e5e8eb;
//   border-radius: 12px;
//   box-shadow: 0px 5px 0px #e5e8eb;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

export default Header;
