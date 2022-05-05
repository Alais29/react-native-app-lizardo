import React from "react";
import { Text, View } from "react-native";
import Header from "../../Components/Header";
import List from "../../Components/List/List";
import { CATEGORIES } from "../../data/data";

import { styles } from "./styles";

const Categories = () => {
  return (
    <>
      <Header>
        <Text>Categorías</Text>
      </Header>
      <View style={styles.container}>
        <List data={CATEGORIES} />
      </View>
    </>
  );
};

export default Categories;
