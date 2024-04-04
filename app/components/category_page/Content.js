import React from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, FlatList} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { cat_content } from './../../data/dataArray';

const w = Dimensions.get('window').width;


const Content = () => {

  const {navigate} = useNavigation();

    return ( 
        <View style={{flex: 1}}>
            <FlatList 
                data={cat_content}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={styles.btn} key={index} activeOpacity={1} onPress={() => navigate('AboutCategory', {header_name: item.name})}>
                        <Text style={styles.txt}> {item.name} </Text>
                        <Image 
                            source={item.img}
                            style={styles.img}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
     );
}
 
export default Content;


const styles = StyleSheet.create({
  btn: {
    width: w,
    height: w/6,
    borderColor: 'grey',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    width: w/6,
    height: "90%",
    resizeMode: 'contain'
  },
  txt: {
    fontSize: 18,
    color: '#999'
  }
})
