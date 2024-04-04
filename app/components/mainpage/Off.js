import React from 'react'
import {Image, StyleSheet, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native'


const w = Dimensions.get('window').width;

const Off = () => {

  const {navigate} = useNavigation();

    return ( 
        <Ripple style={styles.container} onPress={() => navigate('Off')}>
            <Image 
                style={styles.image}
                source={require('../../../assets/Off/9.jpg')}
            />
        </Ripple>
     );
}
 
export default Off;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: w/3.2,
    marginTop: 15,
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
})

