import React from 'react'
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {cart} from '../../data/dataArray'

const w = Dimensions.get('window').width;

const ShopBox = () => {

    _alert=()=>{
        alert(
            'Do you want to delete?',
            [
              {
                text: 'No',
                onPress: () => {},
                style: 'cancel',
              },
              {text: 'Yes', onPress: () => {}},
            ],
          );
    }

    return ( 
        <View style={styles.container}>
            {
                cart.map((item, index) => (
                    <View style={styles.content} key={index} >
                <View style={styles.sec1}>
                    <View style={styles.sec1_left}>
                        <Image 
                            source={item.img}
                            style={{width: 60, height: 80, resizeMode: 'contain'}}
                        />
                    </View>
                    <View style={styles.sec1_right}>
                        <Text>
                            {item.p_name}
                        </Text>
                        <Text style={{color: '#aaa', marginTop: 7}}>
                            {item.e_name}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                            <Text> color: <Text style={{color: '#aaa'}}> {item.color} </Text> </Text>
                            <View style={{width: 15, height: 15, borderRadius: 7.5, borderColor: '#ccc', borderWidth: 0.4, backgroundColor: item.color_rgb}} />
                        </View>
                        <View>
                            <Text> Warranty: <Text style={{color: '#aaa'}}> {item.warranty} </Text> </Text>
                        </View>
                        <View style={{marginTop: 7}}>
                            <Text> Seller: <Text style={{color: '#aaa'}}> {item.seller} </Text> </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>
                                Number: 
                            </Text>
                            <Picker
                                style={{height: 15, width: 30, marginLeft: 10}}
                                mode='dropdown'
                            >
                                <Picker.Item label={item.number} value={item.number} />
                            </Picker>
                        </View>
                    
                        
                    </View>
                </View>
                <View style={styles.sec2}>
                    <View style={[styles.sec2_price, styles.separator, {paddingBottom: 25}]}>
                        <Text style={{color: "#aaa"}}> Total price </Text>
                        <Text style={{color: "#aaa"}}> {item.price} </Text>
                    </View>
                    <View style={[styles.sec2_price, styles.separator]}>
                        <Text style={{color: "green"}}> Final price </Text>
                        <Text style={{color: "green"}}> {item.end_price} </Text>
                    </View>
                    <View style={[styles.sec2_price, styles.separator, {backgroundColor: 'white'}]}>
                        <Text style={{color: 'red'}} onPress={ () => _alert() }> Delete </Text>
                    </View>
                </View>
            </View>
                ))
            }
        </View>
     );
}
 
export default ShopBox;


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    width: null,
    height: null,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
    marginBottom: 10
  },
  sec1: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    width: "100%",
    paddingVertical: 20
  },
  sec1_left: {
    width: "0.2*w",
  },
  sec1_right: {
    width: "0.8*w"
  },
  sec2: {
    flex: 1,
    width: "100%"
  },
  sec2_price: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  separator: {
    borderColor: '#ccc',
    borderTopWidth: 1,
    width: "100%"
  }
})
