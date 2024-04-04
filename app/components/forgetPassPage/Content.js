import React, {useEffect, useRef, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'


const w = Dimensions.get('window').width;


  const Content = () => {

    const {navigate} = useNavigation();

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");

    
    useEffect(() => {
      if (pin1Ref.current) {
        setTimeout(() => {
          pin1Ref.current?.focus();
        }, 0);
      }
    });

    return ( 
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Text style={styles.sec1_text1}>
                    Confirmation code is submitted for number 1111111
                </Text>
                <Text style={styles.sec1_text2} onPress={() => navigate('Login')}>
                    Edit phone number
                </Text>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.sec2_text}>
                    Enter the Confirmation code
                </Text>
                <View style={styles.sec2_p2}>

                  <View style={styles.textInputView}>
                    <TextInput
                      ref={pin1Ref}
                      keyboardType={'number-pad'}
                      maxLength={1}
                      onChange={() => {
                        setPin1(pin1);
                        if (pin1 != "") pin2Ref.current.focus();
                      }}
                      style={styles.textInputText}
                      selectionColor='green'
                    />
                  </View>

                  <View style={styles.textInputView}>
                    <TextInput
                      ref={pin2Ref}
                      keyboardType={'number-pad'}
                      maxLength={1}
                      onChange={() => {
                        setPin2(pin2);
                        if (pin2 != "") pin3Ref.current.focus();
                      }} 
                      style={styles.textInputText}
                    />
                  </View>

                  <View style={styles.textInputView}>
                    <TextInput
                      ref={pin3Ref}
                      keyboardType={'number-pad'}
                      maxLength={1}
                      onChange={() => {
                        setPin3(pin3);
                        if (pin3 != "") pin4Ref.current.focus();
                      }} 
                      style={styles.textInputText}
                    />
                  </View>

                  <View style={styles.textInputView}>
                    <TextInput
                      ref={pin4Ref}
                      keyboardType={'number-pad'}
                      maxLength={1}
                      onChange={() => {
                        setPin4(pin4);
                        if (pin4 != "") pin5Ref.current.focus();
                      }} 
                      style={styles.textInputText}
                    />
                  </View>

                  <View style={styles.textInputView}>
                    <TextInput
                      ref={pin5Ref}
                      keyboardType={'number-pad'}
                      maxLength={1}
                      onChange={() => {
                        setPin5(pin5);
                      }} 
                      style={styles.textInputText}
                    />
                  </View>
                
                </View>
                <View style={{paddingTop: 30,}}>
                    <Text style={{ color: 'red'}}>
                        Entered code is wrong
                    </Text>
                </View>
            </View>
        </View>
     );
}
 
export default Content;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
  },
  sec1: {
    width: null,
    backgroundColor: '#fff',
    borderColor: '#5ba056',
    padding: 15,
    justifyContent: 'space-between'
  },
  sec1_text1: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 10,
    color: '#a7a7a7'

  },
  sec1_text2: {
    fontSize: 12,
    color: '#43a3e7',
    paddingTop: 10,
    paddingBottom: 5,
  },
  sec2: {
    marginTop: 20
  },
  sec2_text: {
    fontSize: 16,
    color: '#888'
  },
  sec2_p2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50
    
  },
  textInputView: {
    borderBottomWidth: 1,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputText: {
    fontSize: 30,
  }
})
