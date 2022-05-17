import { Button, Card, Paragraph, Title } from "react-native-paper";
import React from "react";

import { styles } from "./styles";
import { colors } from "../../../Styles/colors";

const NewsItem = ({ article, cardStyle = {} }) => {
  return (
    <Card style={{ ...styles.card, ...cardStyle }}>
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
