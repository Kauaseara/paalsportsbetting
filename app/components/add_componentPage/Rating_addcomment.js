import React from 'react'
import {View, StyleSheet, Dimensions, Text} from 'react-native'
import Stars from 'react-native-stars'



const w = Dimensions.get('window').width

const Rating_addcomment = () => {
    return ( 
        <View style={styles.container}>
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
          
        </View>
     );
}
 
export default Rating_addcomment;


const styles = StyleSheet.create({
  container:{
    width: null,
    height: null,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    padding: 5,
    elevation: 0,
    marginBottom: 10
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
} 
})
