import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import DomainURL from "./compornent/api";

export default function App() {
  const num1 = "新宿";
  const num2 = "上板橋";
  // const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${num1}&destination=${num2}&key=ここにはkeyが入っています`;
  const [url, setUrl] = useState(
    "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json"
  );
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    // header("Access-Control-Allow-Origin: *");
    console.log(url);
    // axios.get(url).then((res) => {
    //   console.log(res);
    // });
    const res = await axios(url);
    console.log(res);
  };

  // const getNews = async () => {
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data" + JSON.stringify(data));
  //     });
  // };

  // useEffect(() => {
  //   const num1 = "東京駅";
  //   const num2 = "新宿駅";
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/directions/json?origin=${num1}&destination=${num2}&key=AIzaSyCOTvqk7xXppyfmL4tGNrwiq8LmfsxE3_g`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
