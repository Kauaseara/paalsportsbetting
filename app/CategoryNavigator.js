import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Sport from './screens/Sport';
import Auto from './screens/Auto';
import Entertainment from './screens/Entertainment';
import MyHeader from './components/header/MyHeader';


const TopTab = createMaterialTopTabNavigator();

let props = {
    head_name: 'CategoryNavigator',
    head_page_name: 'Product Categories'
}

const CategoryNavigator = ({route}) => {

    
    return ( 
        <> 
        <MyHeader {...props} />
                <TopTab.Navigator 
                    initialRouteName={route.params?.num_tab}
                    backBehavior="none"
                    screenOptions={({route}) => ({
                        tabBarItemStyle : ({focused, color, size}) => ({
                            backgroundColor: "red",
                            borderBottomWidth: 3,
                            borderColor:  focused ? "green" : ""
                        }),
                        headerShown: false,
                        tabBarScrollEnabled: true,
                        tabBarActiveTintColor: "red",
                        tabBarInactiveTintColor: "grey",
                    })}
                >
                    <TopTab.Screen name="Entertainment" component={Entertainment}  />
                    <TopTab.Screen name="Sport" component={Sport}  />
                    <TopTab.Screen name="Auto" component={Auto}  />
                </TopTab.Navigator>
                </>
     );
}
 

export default CategoryNavigator;