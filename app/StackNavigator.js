import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main";
import AboutCategory from "./screens/AboutCategory";
import CategoryNavigator from "./CategoryNavigator";
import Off from "./screens/Off";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgetPass from "./screens/ForgetPass";
import Search from "./screens/Search";
import SideMenu from "./components/drawer/SideMenu";
import Comment from "./screens/Comment";
import AddComment from "./screens/AddComment";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "70%",
          backgroundColor: "skyblue",
        },
      }}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      {/* <Stack.Screen name="AboutCategory" component={AboutCategory} />
        <Stack.Screen name="CategoryNavigator" component={CategoryNavigator} />
        <Stack.Screen name="Off" component={Off} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="AddComment" component={AddComment} /> */}
    </Stack.Navigator>
  );
};

export default Root;
