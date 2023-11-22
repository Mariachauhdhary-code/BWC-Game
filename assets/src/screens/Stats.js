import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const Stats = ({navigation, props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> BWC GAMES </Text>
      </View>
      <View>
        <Text style={styles.heading}>Cribbage Stats</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <Feather
          name={'arrow-left'}
          size={18}
          color="black"
          style={{marginRight: 330, marginBottom: 70}}
        />
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={styles.innerbox}>
          <Text style={styles.names}> Name </Text>
          <Text style={styles.bwc}>{''}</Text>
          <Text style={styles.bwc}> Mr.BWC </Text>
          <Text style={styles.xyz}> xyz </Text>
        </View>
        <View>
          <View style={styles.innerbox2}>
            <Text style={styles.textt}> Date </Text>
            <Text style={styles.textt}> Games </Text>
            <Text style={styles.textt}> Date </Text>
            <Text style={styles.textt}> Games </Text>
          </View>
          <View style={styles.innerbox3}>
            <Text style={styles.textt}> Played </Text>
            <Text style={styles.textt}> Played </Text>
            <Text style={styles.textt}> Won </Text>
            <Text style={styles.textt1}> Won </Text>
          </View>
          <View style={styles.innerbox3}>
            <View style={styles.innerbox4}>
              <Text style={styles.textx}> 0 </Text>
            </View>
            <View style={styles.innerbox5}>
              <Text style={styles.textx}> 0 </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textt: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    paddingHorizontal: 30,
  },
  textt1: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    paddingHorizontal: 30,
    left: 15,
  },
  textx: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    paddingHorizontal: 15,
    left: 35,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  box: {
    backgroundColor: '#fff',
    height: '35%',
    width: '100%',
    top: '6%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    top: 60,
    marginLeft: 5,
  },
  names: {
    fontSize: 14,
    color: '#000000',
    top: 10,
    fontWeight: '700',
  },
  bwc: {
    fontSize: 14,
    color: '#000000',
    top: 22,
    fontWeight: '700',
  },
  innerbox: {
    marginVertical: 20,
    right: 80,
  },
  xyz: {
    fontSize: 14,
    color: '#000000',
    top: 22,
    fontWeight: '700',
  },
  innerbox2: {
    flexDirection: 'row',
    right: 80,
  },
  innerbox3: {
    flexDirection: 'row',
    marginVertical: 5,
    right: 92,
  },
  innerbox4: {
    marginVertical: 50,
    left: 125,
  },
  innerbox5: {
    marginVertical: 50,
    left: 285,
  },
});
export default Stats;
