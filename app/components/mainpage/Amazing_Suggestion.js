import React from 'react'
import {View,Text,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Ripple from 'react-native-material-ripple';
import CountDown from 'react-native-countdown-component';
import {product_list} from '../../data/dataArray'


const w = Dimensions.get('window').width;

const Amazing_Suggestion = () => {

    const {navigate} = useNavigation();

    return(
        <View style={{marginTop: 10}}>
            <View style={styles.head}>
                <Text style={styles.head_right}>
                    Amazing <Text style={[styles.head_right, {color: '#ef394e'}]}> Suggestion </Text>
                </Text>
                <CountDown
                    until={24*60*60}
                    size={14}
                    onFinish={() => {}}
                    digitStyle={{backgroundColor: '#777', borderRadius: 1}}
                    digitTxtStyle={{color: '#fff', fontSize: 18, fontWeight: '500'}}
                    timeToShow={['H','M', 'S']}
                    timeLabels={{m: '', s: ''}}
                    showSeparator
                />
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product_list}
                renderItem={({item,index})=>
                    <Ripple style={styles.box} onPress={() => navigate('Product', {header_name: item.pname})} >
                        <View style={styles.view_img}>
                            <Image 
                                style={styles.img}
                                source={item.img}
                            />
                        </View>
                        <View style={styles.info}>

                            <View style={{paddingVertical: 8, paddingLeft: 5}}>
                                <Text style={{fontSize: 16, color: '#333' }}>
                                    {item.pname}
                                </Text>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{ paddingVertical: 7, paddingRight: 5}}>
                                <Text style={{color: 'red', textAlign: 'right', fontSize: 12, textDecorationLine: 'line-through', paddingVertical: 2.5}}>
                                    {item.price} Euro
                                </Text>
                                <Text style={{color: '#14dc17', textAlign: 'right', fontSize: 14, paddingVertical: 2.5}}>
                                    {item.price} Euro
                                </Text>
                            </View>
                        </View>
                    </Ripple>
                }
            />
        </View>
    )
}

export default Amazing_Suggestion;

const styles = StyleSheet.create({
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:10
    },
    head_left:{
        color:'#0052cc',
        fontSize:14,
    },
    head_right:{
        fontSize:18,
        color:'#333',
        fontWeight: 'bold'
    },
    box:{
        backgroundColor:'#fff',
        flexDirection:'column',
        width:w/2.8,
        height:w/1.6,
        marginHorizontal:5,
        marginBottom:10,
        borderRadius:2,
        borderColor:'#ddd',
        borderWidth:0.5
    },
    view_img:{
        width:'100%',
        height:'60%',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:'90%',
        height:'100%',
        resizeMode:'contain'
    },
    separator: {
        backgroundColor: '#eee', 
        width: "100%", 
        height: 1, 
    }, 
    info: {
        width: "100%",
        height: '30%',        
    }
})

