import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


const Content = () => {

    const [user, setUser] = useState(false)
    const [pass, setPass] = useState(false);

    const changeUserColor = () => {
        setUser(true);
        setPass(false);

    };

    const changePassColor = () => {
        setUser(false);
        setPass(true);
    };


    return ( 
        <View style={styles.container}>
            <View 
                style={[styles.sec1, user ? {borderColor: 'green'} : {}]}
                activeOpacity='0.9'
            >

                <MaterialIcons name="email" size={24} color="#aaa" style={{position: 'relative'}}/>
                {
                    user ? <Text style={styles.sec1_p_text}> Cell Phone or Email </Text> : null

                }
                <TextInput 
                    placeholder='Cell Phone or Email'
                    placeholderTextColor= '#bbb'
                    onFocus={changeUserColor}
                    style={styles.text_input}
                />
            </View>

            <View
                style={[styles.sec1, pass ? {borderColor: 'green'} : {}]}
                activeOpacity='0.9'
            >
                <MaterialIcons name="lock" size={24} color="#aaa" style={{position: 'relative'}} />
                {
                    pass ? <Text style={styles.sec1_p_text}> Password </Text> : null
                }
                <TextInput 
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor= '#bbb'
                    onFocus={changePassColor}
                    style={styles.text_input}
                />
            </View>            
        </View>
     );
}
 
export default Content;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80.65%",
    padding: 20,
    paddingTop: 0,
    justifyContent: 'flex-start',
  },
  sec1: {
    margin: 5,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderBottomWidth: 1.5,
    borderColor: '#666',
  },
  text_input: {
    padding: 5,
    paddingBottom: 0
  },
  sec1_p_text: {
    color: 'rgb(0, 128, 255)',
    fontSize: 12,
    paddingBottom: 35,
    paddingLeft: 30,
    position: 'absolute'
  }
})
