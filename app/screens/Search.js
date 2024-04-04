import React from 'react'
import {View, Text} from 'react-native'
import MyHeader from '../components/header/MyHeader';

let props = {
    head_name: 'Search',
}

const Search = () => {
    return ( 
        <View style={{backgroundColor: '#f3f3f3', flex: 1}}>
            <MyHeader {...props} />
        </View>
     );
}
 
export default Search;