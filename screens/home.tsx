import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../components/counter";
import Search from "../components/search";
export default function Home() {
  return (
    <View style={styles.container}>
      <Counter />
      <Search />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    marginTop: 85,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
