import React from "react";
import { ScrollView } from "react-native";
import Slider from "../components/mainpage/Slider";
import Category from "../components/mainpage/Category";
import Offer from "../components/mainpage/Offer";
import Off from "../components/mainpage/Off";
import Productone from "../components/mainpage/Productone";
import Producttwo from "../components/mainpage/Producttwo";
import Amazing_Suggestion from "../components/mainpage/Amazing_Suggestion";
import MyHeader from "../components/header/MyHeader";

const Main = () => {
  return (
    <ScrollView style={{ backgroundColor: "#eee" }}>
      <MyHeader head_name={"Main"} />
      <Producttwo />
    </ScrollView>
  );
};

export default Main;
