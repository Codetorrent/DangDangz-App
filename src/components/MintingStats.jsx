import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppText from './common/AppText';
import Slider from '@react-native-community/slider';

const StatBox = ({...props}) => {
  return (
    <>
    <View style={{display: 'flex', flexDirection: 'row', }}>
        <View style={{width: "60%"}}>
          <AppText style={styles.statName}>{props.statName}</AppText>
        </View>
        <View style={{width: "40%"}}>
          <AppText style={styles.statRange}>50-70</AppText>
        </View>
      </View>
      <Slider
        style={{width: 200, height: 40, bottom:10}}
        value={0.7}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFE603"
        thumbTintColor="#FFE603"
        maximumTrackTintColor="#000000"
      />
    </>
    
  )
}

const MintingStats = () => {
  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <View 
        style={styles.cardContainer} 
      >
        <AppText style={styles.title}>Shiba Inu</AppText>
        <StatBox statName="Stamina" />
        <StatBox statName="Intelligence" />
        <StatBox statName="Expression" />
        <StatBox statName="Focus" />
        <StatBox statName="Stamina" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    alignItems: 'center',
    marginVertical: '1%',
    marginHorizontal: '5%',
    paddingVertical: 5,
    paddingHorizontal: '22%',
    borderRadius: 50,
    borderColor: '#E5E8EB',
    borderWidth: 5,
    marginBottom: 100
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
  statName:{
    color:'black'
  },
  statRange: {
    textAlign:'right',
    fontSize: 10
  }
});

export default MintingStats;
