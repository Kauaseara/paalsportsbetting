import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Header } from "@rneui/themed";
import Ripple from "react-native-material-ripple";
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyHeader = ({ head_name, head_page_name, left_btn }) => {
  const navigation = useNavigation();

  const Main_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 130 }]}>
            <View style={{ borderRadius: 100 }}>
              {left_btn == "back" ? (
                <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={24} color="#fff" />
                </Ripple>
              ) : (
                <Ripple
                  style={styles.btn}
                  onPress={() => navigation.toggleDrawer()}
                >
                  <Entypo name="menu" size={24} color="#fff" />
                </Ripple>
              )}
            </View>
            <View style={{ borderRadius: 100 }}>
              {head_page_name ? (
                <Ripple style={styles.btn}>
                  <Text
                    style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                  >
                    {" "}
                    {head_page_name}{" "}
                  </Text>
                </Ripple>
              ) : (
                <Ripple style={styles.btn}>
                  <Text
                    style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                  >
                    PaalBetting
                  </Text>
                </Ripple>
              )}
            </View>
          </View>
        }
        rightComponent={
          <View style={[styles.row, { marginRight: 0, width: 200 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple
                style={styles.btn}
                onPress={() => navigation.navigate("Cart")}
              >
                <Button title="Connect Wallet" />
              </Ripple>
            </View>
          </View>
        }
        containerStyle={{
          backgroundColor: "#000",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#234"
        StatusBarStyle={{ backgroundColor: "red" }}
      />
    );
  };

  const Cart_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 130 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={22} color="#000" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <Text
                  style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}
                >
                  {" "}
                  Basket{" "}
                </Text>
              </Ripple>
            </View>
          </View>
        }
        rightComponent={
          <View style={styles.row}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <MaterialCommunityIcons name="cart" size={22} color="#fff" />
              </Ripple>
            </View>
          </View>
        }
        containerStyle={{
          backgroundColor: "#ef394e",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  const Login_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 110 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="#000" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  {" "}
                  {head_page_name}{" "}
                </Text>
              </Ripple>
            </View>
          </View>
        }
        rightComponent={
          <View style={[styles.row, { width: 80 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple
                style={styles.btn}
                onPress={() => navigation.navigate("Search")}
              >
                <Feather name="search" size={20} color="#fff" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple
                style={styles.btn}
                onPress={() => navigation.navigate("Cart")}
              >
                <MaterialCommunityIcons name="cart" size={24} color="#fff" />
              </Ripple>
            </View>
          </View>
        }
        containerStyle={{
          backgroundColor: "#ef394e",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  const ForgetPass_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 240 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="#fff" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <Text style={{ fontSize: 12, color: "#fff" }}>
                  {" "}
                  {head_page_name}{" "}
                </Text>
              </Ripple>
            </View>
          </View>
        }
        rightComponent={{}}
        containerStyle={{
          backgroundColor: "#ef394e",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  const Comment_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 200 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="#fff" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <Text style={{ fontSize: 18, color: "#fff" }}>
                  {" "}
                  {head_page_name}{" "}
                </Text>
              </Ripple>
            </View>
          </View>
        }
        rightComponent={{}}
        containerStyle={{
          backgroundColor: "#ef394e",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  const Search_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 160 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#777" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <TextInput
                placeholder="Search in Digikala ..."
                placeholderTextColor="#888"
                selectionColor="red"
              />
            </View>
          </View>
        }
        rightComponent={
          <View style={[styles.row, { width: 80 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <MaterialCommunityIcons
                  name="microphone"
                  size={24}
                  color="#777"
                />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color="#777"
                />
              </Ripple>
            </View>
          </View>
        }
        containerStyle={{
          backgroundColor: "#fff",
          justifyContent: "space-between",
          statusBarColor: "red",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  const CategoryNavigator_Header = () => {
    return (
      <Header
        leftComponent={
          <View style={[styles.row, { width: 200 }]}>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </Ripple>
            </View>
            <View style={{ borderRadius: 100 }}>
              <Ripple style={styles.btn}>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  {" "}
                  {head_page_name}{" "}
                </Text>
              </Ripple>
            </View>
          </View>
        }
        rightComponent={{}}
        containerStyle={{
          backgroundColor: "#234",
          justifyContent: "space-between",
        }}
        androidStatusBarColor="#ef394e"
      />
    );
  };

  switch (head_name) {
    case "Main":
      return Main_Header();
      break;
    case "Cart":
      return Cart_Header();
      break;
    case "Login":
      return Login_Header();
      break;
    case "Register":
      return Login_Header();
      break;
    case "ForgetPass":
      return ForgetPass_Header();
      break;
    case "Search":
      return Search_Header();
      break;
    case "CategoryNavigator":
      return CategoryNavigator_Header();
      break;
    case "Comment":
      return Comment_Header();
      break;
  }
};

export default MyHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    padding: 7,
  },
});
