import React from 'react'
import {ScrollView} from 'react-native'
import Offs from '../components/offpage/Offs';
import MyHeader from '../components/header/MyHeader';


const props = {
    head_name: 'Main',
    head_page_name: 'Charger',
    left_btn: 'back'
};


const Category = () => {
    return ( 
        <ScrollView>
            <MyHeader {...props} />
            <Offs />
        </ScrollView>
     );
}
 
export default Category;