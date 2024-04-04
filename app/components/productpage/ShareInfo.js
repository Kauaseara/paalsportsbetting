import React, {useState} from 'react'
import {Text, View, StyleSheet, Dimensions, Share} from 'react-native'
import {FontAwesome, Entypo} from 'react-native-vector-icons';
import { product_share } from '../../data/dataArray';
import Ripple from 'react-native-material-ripple';

w = Dimensions.get('window').width;

const ShareInfo = () => {

    const [shareValue, setShareValue] = useState('');

    const shareProduct = () => {
      Share.share({
        message: shareValue.toString()
      })
    };


    return ( 
        <View style={styles.container}>
          <View style={styles.box1}>
            <Ripple onPress={shareProduct}>
              <Entypo name="share" size={20} color="#999" style={{marginLeft:5, marginRight: 10}} />
            </Ripple>
            <Ripple>
              <FontAwesome name="bell" size={18} color="#999" style={{marginLeft:10, marginRight: 10}}/>
            </Ripple>
            <Ripple>
              <Entypo name="heart" size={20} color="#999" style={{marginLeft:10, marginRight: 10}}/>
            </Ripple>
          </View>
          {
            product_share.map((item, key) => (
              <View style={styles.box2} key={key}>
                <Text style={{color: 'black', fontSize: 16}}>
                  {item.p_name}
                </Text>
                <Text style={{color: '#999', fontSize: 16}}>
                  {item.e_name}
                </Text>
              </View>
            ))
          }
        </View>
     );
}
 
export default ShareInfo;

const styles = StyleSheet.create({
  container: {
    width: w,
    height: w/4,
    backgroundColor: "#eee",
    borderColor: '#ccc',
    borderTopWidth: 0.5,
    borderBottomWidth: 1.5
  },
  box1: {
    flexDirection: 'row',
    padding: 10,
  },
  box2: {
    padding: 5,
    marginLeft: 5
  }
})
