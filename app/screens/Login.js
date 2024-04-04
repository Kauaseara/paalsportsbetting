import React from 'react'
import {View, Text} from 'react-native'
import Content from '../components/loginPage/Content';
import MyHeader from '../components/header/MyHeader';
import MyFooter from '../components/footer/MyFooter';

let props = {
    head_name: 'Login',
    head_page_name: 'Login'
}


const Login = () => {
    return ( 
        <View>
            <MyHeader {...props} />
            <Content />
            <MyFooter text="Enter Digikala" color={"green"} />
        </View>
     );
}
 
export default Login;