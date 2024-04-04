import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import Slider from '../components/productpage/Slider';
import ShareInfo from '../components/productpage/ShareInfo';
import Buttons from '../components/productpage/Buttons';
import Garranty from '../components/productpage/Garranty';
import Disc from '../components/productpage/Disc';
import Category from '../components/productpage/Category';
import Pro_similar from '../components/productpage/Pro_similar';
import Pro_other_by from '../components/productpage/Pro_other_by';
import MyHeader from '../components/header/MyHeader';
import Rating_addcomment from './../components/add_componentPage/Rating_addcomment';
import Stars from 'react-native-stars';



const Product = ({navigation, route}) => {

    const props = {
        head_name: 'Main',
        head_page_name: route.params?.header_name,
        left_btn: 'back'
    };


    return ( 
        <ScrollView style={{backgroundColor: '#eee'}}>
            <MyHeader {...props} />
            <Slider />
            <ShareInfo />
            <View style={{marginHorizontal: 20}}>
                <Buttons />
                <Garranty />
                <Disc />
                <View>
                    <View style={styles.sec1}>
                        <Stars
                            half={true}
                            default={2.5}
                            spacing={4}
                            starSizeH={20}
                            starSizeW={20}
                            count={5}
                            fullStar={require('../../assets/rating/full_star.png')}
                            emptyStar={require('../../assets/rating/empty_star.png')}
                            halfStar={require('../../assets/rating/half_star.png')} 
                        />
                        <Text style={{fontSize: 12, marginLeft: 3}}>
                            4.3 out of 5
                        </Text>
                        <Text style={{fontSize: 10, color: '#bbb', marginLeft: 3}}>
                            from 1900 registered votes
                        </Text>
                    </View>
                    <Rating_addcomment />
                </View>
            </View>
            <Category />
            <Pro_similar />
            <Pro_other_by />
        </ScrollView>
     );
}
 
export default Product;

const styles = StyleSheet.create({
    sec1: {
        paddingTop: 30,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 30,
      }
})
