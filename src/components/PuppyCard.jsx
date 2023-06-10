import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import AppText from './common/AppText';

const PuppyCard = ()=> {
  return (
      <View style={styles.cardContainer}>
      <View>
        <Image style={styles.cardInu} source={require('../assets/images/shiba-inu.png')} />
      </View>
      <AppText>Shiba Inu</AppText>
      {/* <View>
          <View style={styles.tableCell}>
              <View style={styles.tableHead}>
                  <AppText>FLOOR</AppText>
              </View>
              <View style={styles.tableData}>
                  <AppText>0.02 ETH</AppText>
              </View>
          </View>
          <View style={styles.tableCell}>
              <View style={styles.tableHead}>
                  <AppText>TOTAL VOLUME</AppText>
              </View>
              <View style={styles.tableData}>
                  <AppText>0.66 ETH</AppText>
              </View>
          </View>
      </View> */}
      </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": 10,
    "marginRight": "5%",
    "marginBottom": 10,
    "marginLeft": "5%",
    "gap": 16,
    "width": 200,
    "height": 200,
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 16,
    "shadowColor": "rgba(0, 0, 0, 0.1)",
    "shadowOpacity": 1,
    "borderRadius": 100,
  },
  cardInu: {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "paddingBottom": 40,
    "width": 110,
    "height": 200,
  },
  cardTitle: {
    fontSize: 28,
  },
  cardTable: {
    "fontSize": 16,
    "fontWeight": "600",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "paddingTop": 0,
    "paddingRight": 16,
    "paddingBottom": 0,
    "paddingLeft": 16,
    "width": 150,
    "height": 25
  },
  tableCell: {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "gap": 8,
    "width": 70,
    "height": 25
  },
  tableHead: {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "width": 70,
    "height": 20,
    "color": "#707A83",
    "fontSize": 12
  },
  tableData: {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "paddingTop": 0,
    "paddingRight": 51.375,
    "paddingBottom": 0.5,
    "paddingLeft": 0,
    width: 70,
    "height": 20,
    "fontSize": 16
  }
})

export default PuppyCard;