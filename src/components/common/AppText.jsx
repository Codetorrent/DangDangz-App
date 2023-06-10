import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = props => {
  return (
    <Text style={{...styles.baseText, ...props.style}}>
      {props.children}
    </Text>
    );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins-SemiBold',
  }
})

export default AppText;
