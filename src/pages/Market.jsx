import React from 'react'
import { 
  StyleSheet, 
  Text,
  View, 
  ImageBackground,
} from 'react-native'


const Market = ({...props}) => {
    return (
        <View style={styles.container}>
          <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/market.png')}
          resizeMode='cover'
          />
        </View>
    );
};

export default Market;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
    flex: 1,
  },
})