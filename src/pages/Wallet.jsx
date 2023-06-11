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
  useBalance
 } from '@thirdweb-dev/react-native';


const Wallet = () => {

  const tokenAddress = "0x0000000000000000000000000000000000000000";
  const { data, isLoading } = useBalance(tokenAddress);

  return (
      <View style={styles.container}>
        <View style={styles.balanceBox}>
          <Image style={styles.coinImg} source={require('../assets/images/coin.png')} />
        {
          data
          ? <AppText style={styles.balanceText}>
              {parseFloat(ethers.utils.formatEther(data.value)).toFixed(4)}
            </AppText>
          :null
        }
        </View>
        <View style={styles.buttonGroup}>

        </View>
      </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
  },
  balanceBox:{
    display: 'flex',
    flexDirection: 'row',
  },
  coinImg: {
    width:40,
    height:40,
  },
  balanceText: {
    color: 'black',
    fontSize: 30,
  },
  buttonGroup: {
    width:30
  },
  
})