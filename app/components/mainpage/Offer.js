import React from 'react'
import Ripple from 'react-native-material-ripple';
import {View, StyleSheet, Dimensions, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { offer_list } from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Offer = () => {

  const {navigate} = useNavigation();

    return ( 
        <View style={styles.container}>
            {
                offer_list.map((item, key) => (
                    key==2
                    ?
                    <Ripple style={styles.one_box} key={key} onPress={() => navigate('Off')}>
                    <Image 
                        style={styles.image}
                        source={item.img}
                    />
                    </Ripple>
                    : 
                    <Ripple style={styles.two_box} key={key} onPress={() => navigate('Off')}>
                        <Image 
                            style={styles.image}
                            source={item.img}
                        />
                    </Ripple>
                ))
            }
        </View>
     );
}
 
export default Offer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  image: {
    width: "100%",
    height: "100%"
  },
  one_box: {
    width:'97%',
    height:w/3.7,
    borderRadius:10,
    backgroundColor: "brown"
  }, 
  two_box: {
    width:'47%',
    height:w/3.7,
    marginVertical:15,
    borderRadius:10,
    backgroundColor: "black"
  }
})
