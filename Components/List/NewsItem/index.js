import { View, Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import React from "react";

import { styles } from "./styles";

const NewsItem = ({ article }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: article.urlToImage }} />
      <Card.Content>
        <Title>{article.title}</Title>
        <Paragraph>{article.source.name}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Read More</Button>
      </Card.Actions>
    </Card>
  );
};

export default NewsItem;
