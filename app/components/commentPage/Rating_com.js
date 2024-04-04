import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, Text, TouchableOpacity, LayoutAnimation, UIManager} from 'react-native'
import Stars from 'react-native-stars';




const w = Dimensions.get('window').width;

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
};


const animate = {
    duration: 500, 
    create: {type: 'linear', property: 'opacity'}, 
    update: {type: 'spring', springDamping: 10}, 
    delete: {type: 'linear', property: 'opacity'} 
};


const Rating_com = () => {

    const [changeHeight, setChangeHeight] = useState(false);
    const [changeBtn, setChangeBtn] = useState('continue');
    

    const handleChangeHeight = () => {
        LayoutAnimation.configureNext(animate);
        setChangeHeight(prev => !prev);
        changeHeight ? setChangeBtn('continue') : setChangeBtn('close')
    }

    return ( 
        <View style={styles.container}>
            {
                changeHeight 
                ? 
                null 
                : 
                <View style={styles.sec2}>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        Produce quality
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        value of perchase to price 
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        innovation
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        sufficiency
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        facility usage
                    </Text>
                </View>
                <View style={styles.sec2_part}>
                    <Stars
                        half={true}
                        default={4.5}
                        spacing={2}
                        starSizeH={7}
                        starSizeW={35}
                        count={5}
                        fullStar={require('../../../assets/rating/full_sq.png')}
                        emptyStar={require('../../../assets/rating/empty_sq.png')}
                        halfStar={require('../../../assets/rating/half_sq.png')} 
                    />
                    <Text style={{fontSize: 12, color: '#bbb'}}>
                        design and appearance
                    </Text>
                </View>
                </View>
            }
            <TouchableOpacity style={styles.btn} onPress = {() => handleChangeHeight()}>
                <Text style={{color: '#999'}}> {changeBtn} </Text>
            </TouchableOpacity>          
        </View>
     );
}
 
export default Rating_com;


const styles = StyleSheet.create({
  container:{
    width: null,
    height: null,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    padding: 5,
    elevation: 0,
    marginBottom: 0
  },
  sec1: {
    paddingVertical: 30,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sec2: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  sec2_part: {
    flexDirection: 'row-reverse', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 8
},
btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    bottom: 0
  }  
})
