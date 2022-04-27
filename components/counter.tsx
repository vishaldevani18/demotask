import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
const Counter = (props: any) => {
  const [count, setCount] = useState<number>(0);
  const onCountClick = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text style={styles.titleContainer}>Click test</Text>
      <Button
        title="Click me "
        buttonStyle={{
          backgroundColor: "#ffa978",
          padding: 18,
          marginTop: 12,
          borderRadius: 10,
        }}
        titleStyle={{
          fontWeight: "700",
        }}
        onPress={onCountClick}
      />
      <Card
        containerStyle={{
          padding: 15,
          margin: 0,
          marginTop: 12,
          borderColor: "#e8e8e8",
          borderRadius: 8,
        }}
      >
        <View
          key={1}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={styles.avatarStyle}></View>
          <View style={styles.cardBody}>
            <Text>Number of button clickes</Text>
            <Text style={{ color: "#c2c2c2" }}>{count}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Counter;
const styles = StyleSheet.create({
  titleContainer: {
    color: "#0f0d0d",
    fontSize: 18,
  },
  avatarStyle: {
    height: 30,
    width: 30,
    backgroundColor: "#e8e8e8",
    marginRight: 8,
    borderRadius: 8,
  },
  cardBody: {
    marginBottom: 0,
    padding: 0,
  },
});
