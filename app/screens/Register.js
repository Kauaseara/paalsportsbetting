import React from 'react'
import {View, Text} from 'react-native'
import Content from '../components/registerPage/Content';
import MyHeader from '../components/header/MyHeader';
import MyFooter from '../components/footer/MyFooter';

let props = {
    head_name: 'Register',
    head_page_name: 'Register'
}

const Register = () => {
    return ( 
        <View>
            <MyHeader {...props} />
            <Content />
            <MyFooter text="Register in Digikala" color={"blue"} />
        </View>
     );
}
 
export default Register;