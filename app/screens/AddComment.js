import React from 'react'
import {View,StyleSheet,Text, ScrollView} from 'react-native'

import MyHeader from '../components/header/MyHeader'
import MyFooter from './../components/footer/MyFooter';
import Rating_addcomment from '../components/add_componentPage/Rating_addcomment';
import Send_comment from '../components/add_componentPage/Send_comment';


const props ={
    head_name:'CategoryNavigator',
    head_page_name: 'Record reviews',
}

const AddComment =() => {
    return(
        <>
            <ScrollView style={styles.container}>
                <MyHeader {...props}/>
                <View style={styles.content}>
                    <Text style={styles.rating_text}> your score of this product </Text>
                    <View style={styles.rating_view}>
                        <Rating_addcomment />
                        <Send_comment />
                    </View>            
                </View>
            </ScrollView>
            <MyFooter name={'Record reviews'}/>
        </>
    )
}

const styles=StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
    },
    content: {
        width: '100%',
        height: null,
        padding: 5
    },
    rating_text:{
        fontSize:16,
        color:'#666',
        marginBottom:15,
        marginTop:10
    },
    rating_view:{
        backgroundColor:'transparent',
        padding:5,
        marginHorizontal:5,
    }
})

export default AddComment;