import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Banner} from '../components';

const upperBanner = require('../assets/images/upper-banner.png');
const lowerBanner = require('../assets/images/lower-banner.png');

const Main = () => {

  return (
    <>
      <Banner image={upperBanner} />
      <Banner image={lowerBanner} />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Main;