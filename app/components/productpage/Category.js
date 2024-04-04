import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { cat_list } from '../../data/dataArray';
import { SimpleLineIcons} from '@expo/vector-icons'


const Category = () => {
    return ( 
        <ScrollView 
            style={styles.container} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                cat_list.map((item, key) => (
                    <TouchableOpacity style={styles.btn} key={key}>
                        <SimpleLineIcons name="arrow-left" size={10} color="#bbb"  style={{marginRight: 5}} />
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }     
        </ScrollView>
     );
}
 
export default Category;


const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginHorizontal: 5,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#13c3ea',
    fontSize: 15,
  }
})
