// import {Autocomplete, TextField} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {MdOutlineAccountBalanceWallet, MdOutlineSearch} from 'react-icons/md';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
    <View >
      <AppText style={styles.test}>test bold</AppText>
    </View>
    // <HeaderView>
    //     {/* svg 파일 첫 글자 대문자 안됨 */}
    //     <LogoView onClick={onClickLogo}>
    //         <LogoBox>
    //             <Image
    //                 src={"/img/dangdangz-logo.png"}
    //                 alt="logo"
    //                 width={40}
    //                 height={40}
    //                 style={{
    //                     transform: "rotate(180deg)",
    //                     position: "relative",
    //                     top: "4px",
    //                 }}
    //             />
    //         </LogoBox>
    //         <LogoTitle>DangDangz</LogoTitle>
    //     </LogoView>

    //     <SearchView>
    //         {/* 자동완성로직 */}
    //         <Autocomplete
    //             // props 로 입력 필드 커스텀
    //             renderInput={(
    //                 params // params => 객체, 매개변수 => Customizing
    //             ) => (
    //                 <TextField
    //                     {...params}
    //                     // props
    //                     label={"Search item, Collections, and accounts"}
    //                 />
    //             )}
    //             // 드롭박스 눌렀을 때 빈 배열 => 자동완성
    //             options={[]}
    //         />
    //     </SearchView>

    //     <MenuView>
    //         {/* <MenuItem>
    //             <IconView>
    //                 <MdOutlineSearch />
    //             </IconView>
    //         </MenuItem> */}
    //         <MenuItem onClick={walletConnect}>
    //             Connect wallet
    //             <IconView style={{ marginLeft: "1" }}>
    //                 <MdOutlineAccountBalanceWallet />
    //             </IconView>
    //         </MenuItem>
    //     </MenuView>
    // </HeaderView>
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
    paddingTop: '2',
    paddingRight: '4',
    paddingBottom: '2',
    paddingLeft: '4',
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
  logoTitle: {
    fontSize: 24,
    marginLeft: 8,
    fontFamily: 'Passion One',
    fontStyle: 'normal',
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
