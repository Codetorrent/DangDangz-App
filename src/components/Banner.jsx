import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Banner = ({...props}) => {
    return (
        <View  >
              <Image style={styles.banner} source={props.image} />
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width:"100%",
    height:200,
  }
})