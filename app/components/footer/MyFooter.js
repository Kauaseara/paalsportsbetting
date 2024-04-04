import React from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


const MyFooter = ({text, color, name=null}) => {
    return ( 
        <View style={[styles.footer, {backgroundColor: color == "green" ? "#66bb6a" : "#1e88e5"}]}>
            <View style={styles.row}>
                {
                  name
                  ?
                  <Text style={styles.footer_text}> {name}</Text> 
                  :
                  <> 
                   <MaterialIcons name="keyboard-arrow-left" size={18} color="#fff" />
                    <Text style={styles.footer_text}> {text} </Text> 
                  </>
                }
            </View>
        </View>
     );
}
 
export default MyFooter;

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 65,
    justifyContent: 'center',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  footer_text:{
    fontSize: 14, 
    color: 'white', 
    marginLeft: 10
  }
})

