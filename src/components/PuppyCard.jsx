import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppText from './common/AppText';

const PuppyCard = ({navigation}) => {
  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <AppText style={styles.title}>Choose Your Puppy</AppText>
      <TouchableOpacity 
        style={styles.cardContainer} 
        onPress={()=>navigation.navigate('Minting')}
      >
        <View>
          <Image
            style={styles.cardInu}
            source={require('../assets/images/shiba-inu.png')}
          />
        </View>
        <AppText style={styles.cardTitle}>Shiba Inu</AppText>
        <View style={styles.cardTable}>
          <View style={styles.tableCell}>
            <View style={styles.tableHead}>
              <AppText>FLOOR</AppText>
            </View>
            <View style={styles.tableData}>
              <AppText style={styles.tableData}> 0.02 ETH</AppText>
            </View>
          </View>
          <View style={styles.tableCell}>
            <View style={styles.tableHead}>
              <AppText>TOTAL VOLUME</AppText>
            </View>
            <View>
              <AppText style={styles.tableData}>0.66 ETH</AppText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop:40,
    fontSize: 35,
    color: 'black'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '10%',
    marginHorizontal: "5%",
    gap: 5,
    padding: 40,
    borderRadius: 50,
    borderColor: '#E5E8EB',
    borderWidth: 5,
    width: 300,
    alignSelf: 'center',
  },
  cardInu: {
    alignItems: 'flex-start',
    width: 120,
    height: 200,
  },
  cardTitle: {
    fontSize: 28,
    color: 'black'
  },
  cardTable: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 16,
    paddingLeft: 16,
    width: 250,
  },
  tableCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    width: 70,
    height: 25,
  },
  tableHead: {
    width: 70,
    height: 20,
    color: '#707A83',
    fontSize: 12,
  },
  tableData: {
    color: 'black'
  },
});

export default PuppyCard;
