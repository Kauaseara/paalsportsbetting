import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import {MaterialIcons} from 'react-native-vector-icons';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';

const w = Dimensions.get('window').width;

const Buttons = () => {

  const {navigate} = useNavigation();

    return ( 
        <View style={styles.container}>
            <Ripple style={styles.btn} onPress={() => navigate('Comment')}>
                <Text style={styles.txt}>
                    Reviews
                </Text>
                <MaterialIcons name="forum" size={16} color="#7a707f" />
            </Ripple>
            <Ripple style={styles.btn}>
                <Text style={styles.txt}>
                    Properties
                </Text>
                <MaterialIcons name="content-paste" size={16} color="#7a707f" />
            </Ripple>
        </View>
     );
}
 
export default Buttons;


const styles = StyleSheet.create({
  container: {
    width: 'null',
    height: w/9,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    width: "48%",
    height: "100%",
    backgroundColor: "#fff",
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    color: '#7a707f',
    fontSize: 16,
    marginRight: 5
  }
})
