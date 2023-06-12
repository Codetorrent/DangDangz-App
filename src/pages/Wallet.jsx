import React from 'react'
import { 
  StyleSheet, 
  Text,
  View,
  Image 
} from 'react-native'

import { ethers } from 'ethers';
import AppText from '../components/common/AppText';

import { 
  Web3Button,
  lightTheme,
  useAddress,
  useBalance,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();



const Tokens = () => {
  return (
    <View style={styles.listItems}>
      <View style={styles.listItem}>
        <View style={{width:'50%', flexDirection:'row', alignItems:'center'}}>
          <View  style={styles.tokenLogoBox} >
            <AppText style={{transform: [{rotate:"27.2deg"}], color:'white',fontSize:20}}>D</AppText>
          </View>
          <AppText style={styles.tokenName}>Dangdang</AppText>
        </View>
        <View style={{width:'50%', justifyContent:'center'}}>
          <Text style={styles.tokenBalance}>DDZ</Text>
        </View>
      </View>
    </View>
  );

}

const Nfts = () => {
  return (
    <View style={styles.listItems}>
      <View style={styles.listItem}>
        <View style={{width:'50%', flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/images/shiba-face.png')} style={{width:40,height:40, marginHorizontal: 2, marginVertical: 10}} />
          <AppText style={styles.tokenName}>asdasd</AppText>
        </View>
        <View style={{width:'50%', justifyContent:'center'}}>
          <AppText style={styles.tokenBalance}>Lv.99</AppText>
        </View>
      </View>
    </View>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        // tabBarItemStyle: { width: 50 },
        tabBarStyle: { alignSelf:'center', backgroundColor: '#D9D9D9', width:"60%", borderRadius:30 },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#04B154',
        tabBarIndicatorStyle: {backgroundColor:'#04B154',height:50, borderRadius:30}
      }}
    >
      <Tab.Screen name="Tokens" component={Tokens} />
      <Tab.Screen name="NFTs" component={Nfts} />
    </Tab.Navigator>
  );
}


const Wallet = () => {

  const tokenAddress = "0x0000000000000000000000000000000000000000";
  const { data:balance, isLoading:balanceLoading } = useBalance(tokenAddress);

    const {contract} = useContract("0xc61c07D060F6FB204b5d6D694D042Bb36ce67674")
  const { data } = useContractRead(contract, "showSender");
  const { mutateAsync, isLoading, error } = useContractWrite(contract, "store");
  const address = useAddress();


  return (
    <>
    <View style={styles.container}>
    
      <View style={styles.header}>

      </View>
      <View style={styles.balanceBox}>
        <Image style={styles.coinImg} source={require('../assets/images/coin.png')} />
      {
        data
        ? <AppText style={styles.balanceText}>
            {parseFloat(ethers.utils.formatEther(balance.value)).toFixed(4)} TBNB
          </AppText>
        :null
      }
      </View>
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <Image source={require('../assets/images/money-send.png')} />
        </View>
        <View style={styles.button}>
          <Image source={require('../assets/images/add.png')} />
        </View>
        <View style={styles.button}>
          <Image source={require('../assets/images/exchange.png')} />
        </View>
      </View>
      <View style={styles.labelGroup}>
        <View style={styles.labelBox}>
          <AppText style={{color: '#04B154'}}>Send</AppText>
        </View>
        <View style={styles.labelBox}>
          <AppText style={{color: '#04B154'}}>Buy</AppText>
        </View>
        <View style={styles.labelBox}>
          <AppText style={{color: '#04B154'}}>Swap</AppText>
        </View>
      </View>
    </View>

    <MyTabs />
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  balanceBox:{
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 50,
  },
  coinImg: {
    width:45,
    height:45,
  },
  balanceText: {
    color: 'black',
    fontSize: 30,
  },
  buttonGroup: {
    display:'flex',
    flexDirection: 'row',
    width:"80%",
    justifyContent: 'space-between',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#D9D9D9'
  },
  labelGroup: {
    display:'flex',
    flexDirection: 'row',
    width:"80%",
    justifyContent: 'space-between',
  },
  labelBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    marginTop: 5,
    marginBottom: 20
  },
  listItems: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 50,
  paddingHorizontal: 40,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth:1,
    paddingHorizontal:4
  },
  tokenLogoBox: {
    width:40,
    height:40, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#FF862F',
    borderRadius: 100,
    marginHorizontal: 4,
    marginVertical: 10
},
  tokenName: {

  },
  tokenBalance:{
    textAlign:'right'
  }
  
})