import React from 'react'
import {ScrollView} from 'react-native'
import ShopBox from '../components/CartPage/ShopBox';
import MyHeader from '../components/header/MyHeader';


let props = {
    head_name: 'Cart'
};


const Cart = () => {
    return ( 
        <ScrollView style={{backgroundColor: '#f3f3f3'}}>
            <MyHeader {...props} />
            <ShopBox />
        </ScrollView>
     );
}
 
export default Cart;