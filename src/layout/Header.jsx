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
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
} from '@thirdweb-dev/react-native';

import AppText from '../components/common/AppText';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Header = () => {
  const [userAccount, setUserAccount] = useState();

  const onClickLogo = () => {};

  return (
    <View style={styles.headerView}>
      <TouchableOpacity  style={styles.logoView } >
          <View style={ styles.logoBox }>
              <Image style={styles.logoImage} source={require('../assets/images/dangdangz-logo.png')} />
          </View>
          <Text style={styles.logoText}>DangDangz</Text>
      </TouchableOpacity >
      <View style={styles.menuView}>
        {/* <MenuItem>
            <IconView>
                <MdOutlineSearch />
            </IconView>
        </MenuItem> */}
        <TouchableOpacity >
            <AppText>Connect wallet</AppText>
            <View style={styles.menuItem}>
              {myIcon}
            </View>
        </TouchableOpacity>
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
    paddingHorizontal: 4,
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
    marginRight: 4,
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 50,
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
    cursor: 'pointer',
  },
  iconView: {
    display: 'flex',
    borderWidth: 3,
    borderColor: '#e5e8eb',
    borderStyle: 'solid',
    borderRadius: 12,
    padding: 3,
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
