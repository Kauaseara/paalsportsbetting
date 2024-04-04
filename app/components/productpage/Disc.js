import React, {useState} from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, Platform, UIManager, LayoutAnimation} from 'react-native'



const w = Dimensions.get('window').width;

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const animate = {
    duration: 1000, 
    create: {type: 'linear', property: 'opacity'}, 
    update: {type: 'spring', springDamping: 10}, 
    delete: {type: 'linear', property: 'opacity'} 
};


const Disc = () => {

    const [changeHeight, setChangeHeight] = useState(false);
    const [changeBtn, setChangeBtn] = useState('continue')

    const handleChangeHeight = () => {
        LayoutAnimation.configureNext(animate);
        setChangeHeight(prev => !prev);
        changeHeight ? setChangeBtn('continue') : setChangeBtn('close')
    }

    return ( 
        <View style={styles.container}>
            <View style={[styles.sec1, changeHeight ? {height: null} : {height: 200}]}>
                <Text style={{textAlign: 'justify', lineHeight: 20}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus eu orci sit amet ullamcorper. Nulla at dignissim sem, eu ullamcorper tellus. Vestibulum vel lobortis lorem, quis congue dolor. Aliquam aliquam turpis nec lectus imperdiet pharetra. Aliquam felis tortor, convallis vestibulum ligula nec, pellentesque porttitor enim. Morbi vitae justo in mi pretium aliquet. Aliquam erat volutpat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus eu orci sit amet ullamcorper. Nulla at dignissim sem, eu ullamcorper tellus. Vestibulum vel lobortis lorem, quis congue dolor. Aliquam aliquam turpis nec lectus imperdiet pharetra. Aliquam felis tortor, convallis vestibulum ligula nec, pellentesque porttitor enim. Morbi vitae justo in mi pretium aliquet. Aliquam erat volutpat. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus eu orci sit amet ullamcorper. Nulla at dignissim sem, eu ullamcorper tellus. Vestibulum vel lobortis lorem, quis congue dolor. Aliquam aliquam turpis nec lectus imperdiet pharetra. Aliquam felis tortor, convallis vestibulum ligula nec. 
                </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress = {() => handleChangeHeight()}>
                <Text style={{color: '#999'}}> {changeBtn} </Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default Disc;


const styles = StyleSheet.create({
  container:{
    width: null,
    height: null,
    elevation: 2,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingBottom: 0
  },
  sec1: {
    height: 200,
  },
  btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderTopWidth: 1,
  }
})
