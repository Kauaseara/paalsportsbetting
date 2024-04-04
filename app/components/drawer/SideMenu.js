import React from "react";
import { View, Text, StyleSheet, Image, TextField } from "react-native";
// import { SearchBar } from "react-native-elements";
import {
  FontAwesome,
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";

const SideMenu = () => {
  const { navigate } = useNavigation();
  const sports = ["Soccer", "Football", "Baseball"];
  const markets = [];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.head_text} onPress={() => navigate("Login")}>
          Paal
        </Text>
        <Text style={styles.head_text1} onPress={() => navigate("Login")}>
          BETTING
        </Text>
        {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        /> */}
      </View>
      <View style={styles.body}>
        {sports.map((sport) => (
          <Ripple
            key={sport}
            style={styles.body_btn}
            onPress={() => navigate("Off")}
          >
            <Text style={styles.body_btn_text}> {sport} </Text>
            <Text style={styles.body_badge_text}>
              {markets.filter((market) => market.sport === sport).length}
            </Text>
          </Ripple>
        ))}
      </View>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  head: {
    width: "100%",
    height: "10%",
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  body: {
    width: "100%",
    backgroundColor: "#020602",
    color: "white",
    height: "90%",
  },
  head_text: {
    marginTop: 30,
    fontSize: 20,
    color: "#fff",
    borderWidth: 0,
  },
  head_text1: {
    marginTop: 30,
    fontSize: 20,
    color: "#0f0",
    borderWidth: 0,
    fontWeight: "bold",
  },
  icon: {
    color: "#fff",
    fontSize: 18,
    padding: 5,
    paddingRight: 10,
  },
  body_btn: {
    width: "100%",
    height: null,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body_btn_text: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 0,
  },
  body_badge_text: {
    fontSize: 18,
    color: "#0f0",
    paddingLeft: 0,
  },
  body_btn_icon: {
    fontSize: 20,
    color: "#666",
  },
  border_top: {
    borderTopWidth: 0.5,
    borderColor: "#555",
  },
  cart_ci: {
    padding: 2,
    paddingHorizontal: 5,
    backgroundColor: "#aaa",
    borderRadius: 10,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
