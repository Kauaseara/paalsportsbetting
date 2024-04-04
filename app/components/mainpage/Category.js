import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { cat_list } from '../../data/dataArray';
import {useNavigation} from '@react-navigation/native'


const Category = () => {

  const {navigate} = useNavigation();

    return ( 
        <ScrollView 
            style={styles.container} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                cat_list.map((item, key) => (
                    <TouchableOpacity style={styles.btn} key={key} onPress={() => navigate('CategoryNavigator', {num_tab: item.name})}>
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "limegreen",
    borderRadius: 100,
    marginHorizontal: 5
  },
  text: {
    color: 'white',
    fontSize: 18,
  }
})
