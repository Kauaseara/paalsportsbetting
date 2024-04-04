import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, Modal, TouchableOpacity} from 'react-native'
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons, Feather, SimpleLineIcons, Entypo} from '@expo/vector-icons'
import { product_list } from '../../data/dataArray';


const w = Dimensions.get('window').width;

const Offs = () => {

    const {navigate} = useNavigation();

    const [changeState, setChangeState] = useState(1);
    const [changeIcon, setChangeIcon] = useState(<Ionicons name="grid-outline" size={24} color="black" />);
    const [showModal, setShowModal] = useState(false);
    const [selectIcon, setSelectIcon] = useState(1);

    const handleChangeState = () => {
        switch ( changeState) {
            case 1: 
                setChangeState(2);
                setChangeIcon(<Feather name="list" style={{transform: "rotate(180deg)", color: '#666', fontSize: 24}} />)
                break;
            case 2: 
                setChangeState(3);
                setChangeIcon(<SimpleLineIcons name="control-pause" style={{transform: "rotate(90deg)", color: '#666', fontSize: 24}} />)
                break;
            case 3:
                setChangeState(1);
                setChangeIcon(<Ionicons name="grid-outline" style={{color: '#666', fontSize: 24}}/>)
        }
    }

    const A_header = () => {

        return (
            <View style={styles.A_header_top}>
                <Ripple style={[styles.center, styles.A_header_top_left]} onPress={handleChangeState}>
                   {
                    changeIcon
                   }
                </Ripple>
                <Ripple 
                    style={[styles.center, styles.A_header_top_right, styles.border_left]}
                    onPress={() => setShowModal(true)}
                >
                    <View style={{marginRight: 5}}>
                        <Text style={styles.A_header_top_a_text}> Sort </Text>
                        <Text style={styles.A_header_top_b_text}> most visited </Text>
                    </View>
                    <MaterialIcons name="sort" size={24} color="#666" />
                </Ripple>
                <View style={[styles.center, styles.A_header_top_right, styles.border_left]}>
                    <View style={{marginRight: 5}}>
                        <Text style={styles.A_header_top_a_text}> Filter </Text>
                        <Text style={styles.A_header_top_b_text}> color, model, price,...</Text>
                    </View>
                    <Ionicons name="filter" color="#666" size={24} />
                </View>
            </View>
        )
    };

    const changeModalIcon = (num) => {
        setSelectIcon(num);
        setShowModal(false);
    }

    const Modall = () => {
        return (
            <Modal visible={showModal} transparent={true} >
                    <TouchableOpacity style={Modal_styles.box} onPress={() => setShowModal(false)}>  
                        <View style={Modal_styles.child}>   
                            <Ripple onPress={() => changeModalIcon(1)} style={Modal_styles.modal_btn}>
                                {
                                    selectIcon == 1 ?
                                    <Ionicons name="ios-stop-circle-outline" size={24} color="#00dd00" /> :
                                    <Entypo name="circle" size={24} color="#000" /> 
                                }
                                <Text style={{marginLeft: 25, color: '#333'}}> Most visited </Text>
                            </Ripple>
                            <Ripple onPress={() => changeModalIcon(2)} style={Modal_styles.modal_btn}>
                                {
                                    selectIcon == 2 ?
                                    <Ionicons name="ios-stop-circle-outline" size={24} color="#00dd00" /> :
                                    <Entypo name="circle" size={24} color="#000" /> 
                                }
                                <Text style={{marginLeft: 25, color: '#333'}}> Most sold out </Text>
                            </Ripple>
                            <Ripple onPress={() => changeModalIcon(3)} style={Modal_styles.modal_btn}>
                                {
                                    selectIcon == 3 ?
                                    <Ionicons name="ios-stop-circle-outline" size={24} color="#00dd00" /> :
                                    <Entypo name="circle" size={24} color="#000" /> 
                                }
                                <Text style={{marginLeft: 25, color: '#333'}}> Descending </Text>
                            </Ripple>
                            <Ripple onPress={() => changeModalIcon(4)} style={Modal_styles.modal_btn}>
                                {
                                    selectIcon == 4 ?
                                    <Ionicons name="ios-stop-circle-outline" size={24} color="#00dd00" /> :
                                    <Entypo name="circle" size={24} color="#000" /> 
                                }
                                <Text style={{marginLeft: 25, color: '#333'}}> Ascending </Text>
                            </Ripple>
                            <Ripple onPress={() => changeModalIcon(5)} style={Modal_styles.modal_btn}>
                                {
                                    selectIcon == 5 ?
                                    <Ionicons name="ios-stop-circle-outline" size={24} color="#00dd00" /> :
                                    <Entypo name="circle" size={24} color="#000" /> 
                                }
                                <Text style={{marginLeft: 25, color: '#333'}}> Newest </Text>
                            </Ripple>
                        </View>
                    </TouchableOpacity>
            </Modal>
        )
    };


    const Full = ({data}) => {
        return (
            <Ripple style={Full_styles.box} onPress={() => navigate('Product')}>
                <View style={Full_styles.sec1}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={data.img}
                            style={{width: '50%', height: '65%', resizeMode: 'cover'}}
                        />
                    </View>
                    <Text style={Full_styles.pname}>
                        {data.pname}
                    </Text>
                    <Text style={Full_styles.ename}>
                        {data.ename}
                    </Text>
                </View>
                <View style={Full_styles.sec2}>
                    <View style={Full_styles.sec2_left}>
                        <Text style={{color: '#f4f4f4', fontSize: 12}}> Special offer </Text>
                    </View>
                    <View style={Full_styles.sec2_right}>
                        <Text style={{color: 'red', fontSize: 15, textDecorationLine: 'line-through'}}> {`${data.price} Euro`} </Text>
                        <Text style={{color: '#5ecf56', fontSize: 16}}> `${data.tprice} Euro` </Text>
                    </View>
                </View>
            </Ripple>
        )
    };


    const Half = ({data}) => {
        return (
            <Ripple style= {Half_styles.box} onPress={() => navigate('Product')}>
                <View style={Half_styles.left}>
                    <Image 
                        source={data.img}
                        style={{width: "100%", height: '100%', resizeMode: 'contain'}}
                    />
                </View>
                <View style={Half_styles.right}>
                    <View >
                        <Text style={Full_styles.pname}>
                            {data.pname}
                        </Text>
                        <Text style={Full_styles.ename}>
                            {data.ename}
                        </Text>
                    </View>
                    <View style={{backgroundColor: '#d1d1d1', height: 0.5, width: "100%"}} />
                    <View style={Full_styles.sec2}>
                        <View style={Full_styles.sec2_left}>
                            <Text style={{color: '#f4f4f4', fontSize: 11}}> Special offer </Text>
                        </View>
                        <View style={Full_styles.sec2_right}>
                            <Text style={{color: 'red', fontSize: 13, textDecorationLine: 'line-through'}}> {`${data.price} Euro`} </Text>
                            <Text style={{color: '#5ecf56', fontSize: 14}}> `${data.tprice} Euro` </Text>
                        </View>
                    </View>
                </View>
            </Ripple>
        )
    }


    const Quarter = ({data}) => {
        return (
            <Ripple style={Quarter_styles.box} onPress={() => navigate('Product')}>
                <View style={Quarter_styles.sec1}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={data.img}
                            style={{width: '70%', height: '70%', resizeMode: 'cover'}}
                        />
                    </View>
                    <Text style={Quarter_styles.pname}>
                        {data.pname}
                    </Text>
                </View>
                <View style={Quarter_styles.sec2}>
                    <View style={Quarter_styles.sec2_left}>
                        <Text style={{color: '#f4f4f4', fontSize: 10}}> Special offer </Text>
                    </View>
                    <View style={Quarter_styles.sec2_right}>
                        <Text style={{color: 'red', fontSize: 12, textDecorationLine: 'line-through'}}> {`${data.price} Euro`} </Text>
                        <Text style={{color: '#5ecf56', fontSize: 13}}> `${data.tprice} Euro` </Text>
                    </View>
                </View>
            </Ripple>
        )
    }

    

    return ( 
        <View style={styles.container}>
            <Modall />
            <A_header />
            <View style={{margin: 8, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    product_list.map((item, index) => (
                        changeState === 1 ? 
                        <Full data = {item} /> : 
                        changeState === 2 ? 
                        <Quarter data = {item} /> : 
                        <Half data = {item} />
                    ))
                }
            </View>
        </View>
     );
}
 
export default Offs;



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f1f1f1'
    },
  A_header_top: {
    width: '100%',
    height: w/11,
    flexDirection: 'row',
    elevation: 4,
    top: 0,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  A_header_top_left: {
    width: '10%',
  },
  A_header_top_right: {
    width: '45%',
    flexDirection: 'row'
  },
  border_left: {
    borderLeftWidth: 0.4,
    borderColor: '#666'
  },
  head_icon: {
    fontSize: 24,
    color: '#666',
  },
  A_header_top_a_text: {
    fontSize: 14, 
    textAlign: 'right', 
    color: '#666'
},
A_header_top_b_text: {
    fontSize: 11, 
    color: '#bbb',
    textAlign: 'right', 
}
});


const Full_styles = StyleSheet.create({
    box: {
      width: "99%",
      height: w/1.2,
      backgroundColor: '#fff',
      elevation: 3,
      borderRadius: 2,
      marginBottom: 8
    },
    sec1: {
        padding: 10,
        width: '100%',
        height: '80%'
    },
    pname: {
        fontSize: 18, 
        color: '#111',
        marginBottom: 5,
    },
    ename: {
        fontSize: 16, 
        color: '#777',
        marginBottom: 30
    },
    sec2: {
        borderTopWidth: 0.5,
        borderColor: '#999',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: w/6
    },
    sec2_left: {
        backgroundColor: 'red',
        padding: 2,
        marginTop: 7,
        borderRadius: 4,
        justifyContent: 'center',
        height: w/17,
        marginLeft: 5
    },
    sec2_right: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        marginRight: 5
    },
  })


  const Half_styles = StyleSheet.create({
    box: {
        width: null,
        height: w/2,
        marginBottom: 8,
        elevation: 3,
        borderRadius: 3,
        flexDirection: 'row'
    },
    right: {
        height: "100%",
        width: "70%",
        padding: 5,
        paddingTop: 40,
    }, 
    left: {
        height: "100%",
        width: "30%",
    }
  });


  const Quarter_styles = StyleSheet.create({
    box: {
        width: "49%",
        height: w/1.8,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 2,
        marginBottom: 8
      },
      sec1: {
          padding: 10,
          width: '100%',
          height: '70%'
      },
      pname: {
          fontSize: 16, 
          color: '#111',
          marginBottom: 5,
      },
      sec2: {
          borderTopWidth: 0.5,
          borderColor: '#999',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: "30%"
      },
      sec2_left: {
          backgroundColor: 'red',
          padding: 2,
          marginTop: 7,
          borderRadius: 4,
          justifyContent: 'center',
          height: w/17,
          marginLeft: 5
      },
      sec2_right: {
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100%',
          marginRight: 5
      },
  })

  const Modal_styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        width: w/1.2,
        height: null,
        backgroundColor: '#fff',
    },
    modal_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 30,
        paddingTop: 20
    }
  })
  
