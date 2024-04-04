import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import MyHeader from '../components/header/MyHeader'
import {MaterialIcons, Foundation, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import Rating_com from '../components/commentPage/Rating_com';
import Stars from 'react-native-stars';

let props = {
    head_name: 'Comment',
    head_page_name: 'User Comments'
}

const Comment = () => {

    const [filterName, setFilterName] = useState('New Comments');

    const changeSort = () => {
        filterName == 'New Comments' ? setFilterName('Important comments') : setFilterName('New Comments')
    }

    const {navigate} = useNavigation();

    return ( 
        <View>
            <ScrollView style={styles.container}>
            <MyHeader {...props} />
            <View style={styles.title}>
                <Text style={styles.title_text}> Headphone </Text>
            </View>
            <View style={{padding: 10, paddingTop: 0, paddingBottom: 0}}>
              <View style={styles.sec1}>
                  <Stars
                      half={true}
                      default={2.5}
                      spacing={4}
                      starSizeH={20}
                      starSizeW={20}
                      count={5}
                      fullStar={require('../../assets/rating/full_star.png')}
                      emptyStar={require('../../assets/rating/empty_star.png')}
                      halfStar={require('../../assets/rating/half_star.png')} 
                  />
                  <Text style={{fontSize: 12, marginLeft: 3}}>
                      4.3 out of 5
                  </Text>
                  <Text style={{fontSize: 10, color: '#bbb', marginLeft: 3}}>
                      from 1900 registered votes
                  </Text>
              </View>
                <Rating_com />
            </View>

            <View style={styles.filter}>
                <View style={styles.filter_left}>
                    <Text style={styles.filter_left_comment}> User Comments </Text>
                    <Text style={styles.filter_left_count}> 15 </Text>
                </View>
                <TouchableOpacity style={[styles.filter_right, styles.sort_border]} activeOpacity={1} onPress={() => changeSort()}>
                    <Text style={styles.filter_right_text}> {filterName} </Text>
                    <MaterialIcons name="sort" style={styles.filter_right_icon}/>
                </TouchableOpacity>
            </View>

            <View style={{padding: 10, paddingTop: 0, paddingBottom: 0}}>
                <View style={[styles.row, {paddingVertical: 8, paddingHorizontal: 15, backgroundColor: '#ccc'}]}>
                    <View style={styles.row}>
                        <View style={[styles.row, styles.like_border]}>
                            <Text> 8 </Text>
                            <Foundation name="dislike" style={styles.icon} />
                        </View>
                        <View style={[styles.row, styles.like_border, {marginLeft: 10}]}>
                            <Text> 1 </Text>
                            <Foundation name="like" style={styles.icon} />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 18}}> john </Text>
                            <Text style={{fontSize: 10, color: '#999'}}> 2023/11/20 </Text>
                        </View>
                        <Ionicons name="checkmark-done" size={24} color="red" />
                    </View>
                </View>

                <View style={{padding: 5, paddingTop: 12, width: '100%', alignItems: 'center', backgroundColor: '#fff'}}>
                    <View style={styles.comment_border}>
                        <Text style={{fontSize: 16, color: '#000', textAlign: 'center'}}> Suggest buying this product </Text>
                    </View>
                    <Text style={{color: 'grey'}}> Due to bought it in special offer, I am happy about that and I offer </Text>
                </View>
                <Rating_com />
            </View>
            </ScrollView>

            <Ripple style={styles.btn} onPress={() => navigate('AddComment')}> 
                <MaterialCommunityIcons name="pencil" style={styles.btn_icon} />
            </Ripple>
        </View>
        
     );
}
 
export default Comment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
  title: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_text: {
    fontSize: 18,
    color: '#666',
  },
  filter: {
    padding: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter_right: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 180
  },
  filter_right_text: {
    padding: 5

  },
  filter_right_icon: {
    fontSize: 18
  },
  filter_left: {
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filter_left_comment: {},
  filter_left_count: {},
  sort_border: {
    borderWidth: 0.8,
    borderColor: '#666',
    padding: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  like_border: {
    borderWidth: 0.8,
    borderColor: '#666',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
    width: 60
  },
  icon: {
    color: '#666',
    fontSize: 26,
  },
  comment_border: {
    borderWidth: 0.8,
    borderColor: '#73f96c',
    backgroundColor: '#adfca9',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    width: '97%'
  }, 
  full_page: {
    //position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 20
  },
  btn: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ef394e',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    margin: 15
  },
  btn_icon: {
    fontSize: 17,
    color: '#fff'
  },
  sec1: {
    paddingTop: 30,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
})
