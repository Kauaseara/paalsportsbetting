import React from 'react'
import {Text,View,TextInput,StyleSheet} from 'react-native'

const Send_comment =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}> Your Reviews *</Text>
                <TextInput 
                    style={styles.textIn}
                    
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}> Stron points </Text>
                <TextInput 
                    style={styles.textIn}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}> Weak points</Text>
                <TextInput 
                    style={styles.textIn}
                />
            </View>
            <TextInput 
                style={styles.textIn_multiline}
                multiline
                numberOfLines={6}
                placeholder='Your Content Review *'
                placeholderTextColor="#888"
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:20
    },
    view:{
        width:'100%',
        height:null,
    },
    text:{
        fontSize:16,
        color:'#777',
    },
    textIn:{
        width:'100%',
        backgroundColor:'#FFF',
        marginBottom:10,
        marginTop:15,
        fontSize:16,
        color:'#666',
        height:60,
    },
    textIn_multiline:{
        width:'100%',
        height:null,
        backgroundColor:'#FFF',
        marginBottom:10,
        marginTop:15,
        fontSize:16,
        color:'#666',
        textAlignVertical:'top'
    }
})

export default Send_comment;