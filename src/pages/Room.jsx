import React from 'react'
import { 
  StyleSheet, 
  Text,
  View, 
  ImageBackground,
} from 'react-native'


const Room = ({...props}) => {
    return (
        <View style={styles.container}>
          <ImageBackground 
          style={styles.image} 
          source={require('../assets/images/room-empty.png')}
          resizeMode='cover'
          />
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