import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";
const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;

const Search = (props: any) => {
  const [search, serSearch] = useState<string>("");
  const onSearchText = (search: any) => {
    serSearch(search);
  };
  const onSearchClear = (search: any) => {
    serSearch("");
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.titleContainer}>Search test</Text>
      <SafeSearchBar
        platform="default"
        placeholder="Type Here..."
        onChangeText={(text: string) => onSearchText(text)}
        value={search}
        containerStyle={{
          backgroundColor: "white",
        }}
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
            <Text>Searched text</Text>
            <Text style={{ color: "#c2c2c2" }}>{search}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Search;
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
