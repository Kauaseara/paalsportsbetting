import React from 'react'
import {View, Text} from 'react-native'
import Content from '../components/forgetPassPage/Content'
import MyHeader from '../components/header/MyHeader'

let props = {
    head_name: 'ForgetPass',
    head_page_name: 'Confirmation Cell Phone Number'
}


const ForgetPass = () => {
    return ( 
        <View>
            <MyHeader {...props} />
            <Content />

        </View>
     );
}
 
export default ForgetPass;