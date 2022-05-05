import React from "react";
import { StyleSheet, View } from "react-native";
import Categories from "./Screens/Categories";
import { colors } from "./Styles/colors";

const App = () => {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.light,
  },
});
