import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Orientation,
  ScrollView,
} from "react-native";
import Card from "../Components/Card";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
// import {
//   OrientationLocker,
//   PORTRAIT,
//   LANDSCAPE,
//   useLockListener,
// } from 'react-native-orientation-locker';
// import {
// //   useOrientationChange,
// //   useDeviceOrientationChange,
// //   useLockListener,
// } from 'react-native-orientation-locker';

const Select = () => {
  //   const [isLocked, setLocked] = useState();
  //   const [orientation, setOrientation] = useState();
  //   const [deviceOrientation, setDeviceOrientation] = useState();
  //   const [Lock, setLock] = useState();

  //   useEffect(() => {
  //     checkLocked();
  //   });

  //   useOrientationChange(o => {
  //     setOrientation(o);
  //   });

  //   useDeviceOrientationChange(o => {
  //     setDeviceOrientation(o);
  //   });

  //   useLockListener(o => {
  //     setLocked(o);
  //   });

  //   function checkLocked() {
  //     const locked = Orientation.isLocked();
  //     if (locked !== isLocked) {
  //       setLocked(locked);
  //     }
  //   }

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}> BWC Games </Text>
        </View>
        <View>
          <Text style={styles.txt}>Cribbage</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Feather name={"arrow-left"} size={25} color="grey" style={{}} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PlaywithBWC")}
            //   onPress={() => {
            //     Orientation.lockToPortrait()
            //         checkLocked();
            //       }}
          >
            {/* <TouchableOpacity
          onPress={() => {
            Orientation.lockToPortrait()
              .then(() => {
                checkLocked();
                navigation.navigate('PlaywithBWC');
              })
              .catch(error => {
                console.error('Error locking to portrait:', error);
              });
          }}> */}
            <Text style={styles.text1}> BWC</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Regular")}>
            <Text style={styles.text2}> Regular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text3}>
          <Text style={styles.text4}>Hi Player 1</Text>
          <Text style={styles.text5}>We playing BWC or Regular cards</Text>
        </View>
        <Text style={styles.text6}>Player1</Text>
        <View style={styles.text7}></View>
        <Text style={styles.text8}>Mr.BWC</Text>
        <View style={styles.text9}></View>

        <View>
          <View style={styles.text10}>
            <Text style={styles.text11}>0</Text>
          </View>
          <View style={styles.text12}>
            <Text style={styles.text13}>1</Text>
          </View>
          <View style={styles.text14}>
            <Text style={styles.text15}>2</Text>
          </View>
          <View style={styles.text16}>
            <Text style={styles.text17}>3</Text>
          </View>
          <View style={styles.text18}>
            <Text style={styles.text19}>4</Text>
          </View>
          <View style={styles.text20}>
            <Text style={styles.text21}>5</Text>
          </View>
          <View style={styles.text22}>
            <Text style={styles.text23}>6</Text>
          </View>
          <View style={styles.text24}>
            <Text style={styles.text25}>7</Text>
          </View>
          <View style={styles.text26}>
            <Text style={styles.text27}>8</Text>
          </View>
          <View style={styles.text28}>
            <Text style={styles.text29}>9</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text1: {
    marginLeft: 100,
    top: 70,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },

  text2: {
    marginLeft: 160,
    top: 50,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },

  text3: {
    backgroundColor: "#fff",
    height: 30,
    width: "45%",
    top: 80,
    alignSelf: "center",
  },

  text4: {
    alignSelf: "center",
    bottom: 2,
    color: "#000000",
    fontWeight: "600",
    fontSize: 13,
  },
  text5: {
    marginLeft: 60,
    top: 120,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },
  text6: {
    marginLeft: 60,
    top: 120,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },

  text7: {
    backgroundColor: "#fff",
    height: 20,
    width: "26%",
    top: 25,
    marginLeft: 10,
    top: 135,
  },

  text8: {
    marginLeft: 290,
    top: 85,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },

  text9: {
    backgroundColor: "#fff",
    height: 20,
    width: "26%",
    top: -15,
    marginLeft: 300,
    top: 95,
  },

  text10: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 570,
    marginLeft: 2,
  },

  text11: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text12: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 543,
    marginLeft: 43,
  },

  text13: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text14: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 516,
    marginLeft: 84,
  },

  text15: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text16: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 490,
    marginLeft: 125,
  },

  text17: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text18: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 463,
    marginLeft: 166,
  },

  text19: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text20: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 437,
    marginLeft: 207,
  },

  text21: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text22: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 410,
    marginLeft: 249,
  },

  text23: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text24: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 383,
    marginLeft: 290,
  },

  text25: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text26: {
    backgroundColor: "#fff",
    height: 27,
    width: "9%",
    top: 355,
    marginLeft: 332,
  },

  text27: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  text28: {
    backgroundColor: "#fff",
    height: 27,
    width: "10%",
    top: 328,
    marginLeft: 373,
  },

  text29: {
    top: -1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#1e90ff",
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#000000",
  },
  text: {
    color: "white",
    textAlign: "left",
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  txt: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    height: 100,
    width: 70,
    top: 5,
    marginLeft: 10,
  },
  iconContainer: {
    position: "absolute",
    // top: 5,
    marginLeft: 10,

    // borderWidth:1
  },
});

export default Select;
