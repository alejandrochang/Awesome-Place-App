/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class App extends Component {
  state = {
    placeName: ""
  };

  placeNamedChangeHandler = event => {
    this.setState({
      placeName: event
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.placeName}
          onChangeText={this.placeNamedChangeHandler}
          style={styles.welcome}
          placeholder="An awesome place"
        >
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 55,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    width: 300,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
