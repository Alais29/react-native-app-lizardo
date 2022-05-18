import { Card, Paragraph, Title } from "react-native-paper";
import React from "react";
import * as Linking from "expo-linking";

import { styles } from "./styles";
import { colors } from "../../../Styles/colors";

const NewsItem = ({ article, cardStyle = {} }) => {
  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <Card style={{ ...styles.card, ...cardStyle }} onPress={handlePress}>
      <Card.Cover source={{ uri: article.urlToImage }} style={styles.image} />
      <Card.Content>
        <Title theme={{ colors: { text: colors.light } }} style={styles.title}>
          {article.title.slice(0, 46) + "..."}
        </Title>
        <Paragraph>{article.source.name}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default NewsItem;
