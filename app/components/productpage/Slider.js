import React from 'react'
import {Image, View, StyleSheet, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper';
import { product_list } from '../../data/dataArray';


const w = Dimensions.get('window').width

const Slider = () => {
    return ( 
        <View style={styles.container}>
            <Swiper>
                {
                    product_list.map((item, key) => (
                        <View key={key} style={{width: w, height: w, backgroundColor: 'white'}}>
                            <Image
                                source={item.img}
                                style={styles.img}
                            />
                        </View>
                        
                    ))
                }
            </Swiper>
        </View>
     );
}
 
export default Slider;


const styles = StyleSheet.create({
  container:{
    width: w,
    height: 2*w/3,
  },
  img: {
    width: "100%",
    height: "70%",
    resizeMode: 'contain'
  }
})
