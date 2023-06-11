import React from 'react'
import { 
  StyleSheet, 
  Text,
  View, 
  ImageBackground,
} from 'react-native'


const Map = ({...props}) => {
    return (
        <View style={styles.container}>
          <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/map.png')}
          resizeMode='cover'
          />
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
  container:{
    height:"100%"
  },
  image: {
    flex: 1,
  },
})