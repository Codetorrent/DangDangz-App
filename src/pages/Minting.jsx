import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {MintingCard, MintingStats} from '../components';


const Minting = () => {

  return (
    <ScrollView>
      <MintingCard />
      <MintingStats />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default Minting;