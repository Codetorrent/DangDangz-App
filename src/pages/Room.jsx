import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text,
  View, 
  ImageBackground,
  Alert
} from 'react-native'

import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react-native";
import { ethers } from 'ethers';
import AppText from '../components/common/AppText';


const Room = ({...props}) => {

  const address = useAddress();

  const { contract } = useContract("0xb58c0F745327A4939b5dB320F8Ff2b4bd1f88Bd8");


  const { data: nftBalance, isLoading } = useContractRead(contract, "balanceOf", ["0xfe62d439Efbe001432c88576aEf893FF7Ccd604E"])
      

  return (
      <View style={styles.container}>
        {
          nftBalance?.toString() == 4
          ?
          <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/room-active.png')}
          resizeMode='cover'
          />
          :
          <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/room-empty.png')}
          resizeMode='cover'
          />
        }
        
      </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
    flex: 1,
  },
})