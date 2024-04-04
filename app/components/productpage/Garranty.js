import React, {useState} from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Ionicons} from '@expo/vector-icons'

w = Dimensions.get('window').width;


const Garranty = () => {

    const {navigate} = useNavigation();

    const [border_color, set_border_color] = useState('black');

    changeBorderColor = (color) => {
      set_border_color(color)
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.sec1}>
                <View style={styles.sec1_part1}>
                    <Text style={{color: 'black'}}>
                        Color
                    </Text>
                    <Text style={{color: 'grey'}}>
                        3 Colors
                    </Text>
                </View>
                <View style={styles.sec1_part2}>
                    <TouchableOpacity 
                      style={[styles.sec1_part2_box, border_color === '#fff' ? {borderColor: 'blue'} : {}]}
                      onPress = {() => changeBorderColor('#fff')}
                      >
                        <View style={[styles.sec1_part2_box_color, {backgroundColor: '#fff'}]}/>
                        <Text>
                            blue
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.sec1_part2_box, border_color === '#f00' ? {borderColor: 'blue'} : {}]}
                      onPress = {() => changeBorderColor('#f00')}
                    >
                        <View style={[styles.sec1_part2_box_color, {backgroundColor: '#f00'}]}/>
                        <Text>
                            red
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.sec1_part2_box, border_color === '#00f' ? {borderColor: 'blue'} : {}]}
                      onPress = {() => changeBorderColor('#00f')}
                    >
                        <View style={[styles.sec1_part2_box_color, {backgroundColor: '#00f'}]}/>
                        <Text>
                            white
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sec1_part3}>
                    <Ionicons name="shield-checkmark" size={24} color="#ccc" style={{marginLeft: 20, marginRight: 5}} />
                    <Text>
                        18 months garanty
                    </Text>
                </View>

                <View style={{backgroundColor: '#ccc', height: 1, width: '100%'}} />

                <View style={[styles.sec2, {paddingVertical: 10, paddingLeft: 20}]}>
                  <View style={[styles.sec2_part, {marginBottom: 5}]}>
                    <Text style={{fontSize: 12, color: 'grey'}}>
                      Sell by digikala land | satisfaction from buying : 83%
                    </Text>
                    <MaterialIcons name="storefront" size={24} color='grey' style={{marginRight: 10}}/>
                  </View>
                  <View style={styles.sec2_part}>
                    <Text style={{fontSize: 12, color: 'grey'}}>
                      ready for delivery from digikala <Text style={{color:'black'}}> from 1 day later </Text>
                    </Text>
                    <MaterialIcons name="local-shipping" size={24} color='grey' style={{marginRight: 10}} />
                  </View>
                </View>

                <View style={{backgroundColor: '#ccc', height: 1, width: '100%'}} />

                <View style={[styles.sec3]}>
                  <Text style={{fontSize: 18, color: 'limegreen'}}>
                    7.191 Euro <Text style={{color: 'red', fontSize: 16, textDecorationLine: 'line-through'}}> 8 Euro</Text>
                  </Text>
                  <View style={{alignItems: 'center'}}>
                    <Ripple style={styles.sec3_part2} onPress={() => navigate('Cart')}>
                      <Text style={{color: 'white', fontSize: 18}}>
                        Add to cart
                      </Text>
                      <MaterialCommunityIcons name="cart-variant" size={24} color="white" style={{marginLeft: 5}} />
                    </Ripple>
                  </View>
                  
                </View>

                <View style={{backgroundColor: '#ccc', height: 1, width: '100%', marginVertical: 5}} />

                <View style={styles.sec4}>
                  <View>
                    <SimpleLineIcons name="arrow-left" size={18} color="#ccc" />
                  </View>
                  <View style={styles.sec4_part2}>
                    <Text style={{color: 'dodgerblue'}}>
                      4 sellers are there for this property
                    </Text>
                    <MaterialIcons name="storefront" size={24} color='grey' style={{marginLeft: 5}} />
                  </View>
                </View>

            </View>
        </View>
     );
}
 
export default Garranty;


const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 5,
    paddingVertical: 2,
    elevation: 4,
    marginVertical: 10,
  },
  sec1: {
    paddingVertical: 5,
  },
  border_top: {
    borderColor: "#bbb",
    borderTopWidth: 0.4
  },
  sec1_part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  sec1_part2: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  sec1_part2_box: {
    width: w/8,
    height: w/8,
    borderColor: "#888",
    borderWidth: 0.6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10, 
    marginHorizontal: 5
  },
  sec1_part2_box_color: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: "#bbb",
    borderWidth: 0.5,
  },
  sec1_part3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  sec2: {
    paddingVertical: 5
  },
  sec2_part: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  sec3: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,    
  },
  sec3_part2: {
    backgroundColor: '#5ecf56', 
    width: '100%',
    borderRadius: 5, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: w/7,
    marginHorizontal: 5,
    marginTop: 10
  },
  sec4: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sec4_part2: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
