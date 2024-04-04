import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'
import {useNavigation} from '@react-navigation/native'


const Content = () => {

    const {navigate} = useNavigation();

    const [user, setUser] = useState(false)
    const [pass, setPass] = useState(false);
    const [check, setCheck] = useState(true)

    const changeUserColor = () => {
        setUser(true);
        setPass(false);
    };

    const changePassColor = () => {
        setUser(false);
        setPass(true);
    };

    const changeCheck = () => {
        setCheck(prev => !prev)
    }

    return ( 
        <View style={styles.container}>
            <View 
                style={[styles.sec1, user ? {borderColor: 'green'} : {}]}
                activeOpacity='0.9'
            >
                <MaterialIcons name="email" size={24} color="#aaa"/>
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
                <MaterialIcons name="lock" size={24} color="#aaa" />
                <TextInput 
                    placeholder='Password'
                    secureTextEntry={check}
                    placeholderTextColor= '#bbb'
                    onFocus={changePassColor}
                    style={styles.text_input}
                />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingLeft: 5}}>
                <Ripple style={[styles.checkbox, check === false ? {borderColor: 'green'} : {}]} onPress={changeCheck}>
                    {
                        check === false
                        ?
                        <Ionicons name="checkbox-outline" size={24} color="green"  />
                        : 
                        null
                    }
                </Ripple >
                <Text style={{color: '#aaa', fontSize: 12}}> Show Password</Text>
            </View>

            <View style={styles.sec3}>
                <Text style={{color: '#9a9a9a', padding: 10, fontSize: 13, marginBottom: 10}} onPress={() => navigate('ForgetPass')}>
                    Forgot my Password
                </Text>
                <Text style={{color: 'green', borderBottomWidth: 1, borderColor: 'green'}} onPress={() => navigate('Register')}>
                    Register in Digikala
                </Text>
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
  checkbox: {
    width: 25, 
    height: 25, 
    elevation: 2, 
    borderRadius: 3, 
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: 'transparent'
},
sec3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
}
})
