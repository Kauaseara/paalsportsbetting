import React from 'react'
import {View, TouchableWithoutFeedback, StyleSheet, Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import { swiper_list } from '../../data/dataArray';

const w = Dimensions.get('window').width;

const Slider = () => {
    return ( 
        <View style={styles.container}>
            <Swiper autoplay={false}>
                {
                    swiper_list.map((item, key) => (
                        <TouchableWithoutFeedback style={{flex: 1}} key={key}>
                            <Image
                                style={styles.image}
                                source={item.img}
                            />
                        </TouchableWithoutFeedback>
                    ))
                }
            </Swiper>
        </View>
     );
}
 
export default Slider;

const styles = StyleSheet.create({
  container: {
    height: w/2.2,
  },
  image: {
    width: "100%",
    height: "100%"
  }
})
