import React from 'react'
import {ScrollView} from 'react-native'
import MyHeader from '../components/header/MyHeader';
import Productone from '../components/about_categorypage/Productone';
import Producttwo from '../components/about_categorypage/Producttwo';



const AboutCategory = ({route}) => {

    const props = {
        head_name: 'Main',
        head_page_name: route.params?.header_name
    };


    return ( 
        <ScrollView>
            <MyHeader {...props} />
            <Productone />
            <Producttwo />
        </ScrollView>
     );
}
 
export default AboutCategory;