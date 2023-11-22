import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <View>
          <Text style={styles.uppertxt}> {'props.uppertext'}</Text>
          <Text style={styles.num}>{props.uppernum}</Text>
        </View>
        <View style={styles.rotat}>
          <Text style={styles.build}> Build Word Challenge </Text>
        </View>
        <View style={styles.rotatedContainer}>
          <Text style={styles.lowertxt}> {props.lowertext}</Text>
          <Text style={styles.lowernum}>{props.lowernum}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 150,
    height: 200,
    alignSelf: 'center',
    top: 20,
    borderRadius: 5,
  },
  rotatedContainer: {
    top: 60,
    left: 80,
    right: 0,
    alignItems: 'center',
  },
  uppertxt: {
    fontSize: 26,
    color: '#1e90ff',
    fontWeight: '700',
  },
  cont: {
    flex: 1,
    backgroundColor: '#1e90ff',
  },
  num: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '700',
    marginLeft: 25,
    marginBottom: 20,
    top: -18,
  },
  build: {
    fontSize: 19,
    color: '#000000',
    fontWeight: '700',
  },
  lowernum: {
    fontSize: 12,
    color: '#000000',
    marginRight: 67,
    bottom: 23,
    fontWeight: '700',
    transform: [{rotate: '180deg'}],
  },
  lowertxt: {
    marginRight: 30,
    top: 8,
    fontSize: 26,
    color: '#1e90ff',
    fontWeight: '700',
    transform: [{rotate: '180deg'}],
  },
  rotat: {
    top: 10,
    alignSelf: 'center',
    transform: [{rotate: '-55deg'}],
    height: 27,
    width: 200,
  },
});

export default Card;
