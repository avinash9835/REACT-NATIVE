import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>
          Open up App.js to start working on your app hgfhgfhgfhg!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});
