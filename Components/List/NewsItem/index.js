import { Button, Card, Title } from "react-native-paper";
import React from "react";

import { styles } from "./styles";
import { colors } from "../../../Styles/colors";

const NewsItem = ({ article, cardStyle = {} }) => {
  return (
    <Card style={{ ...styles.card, ...cardStyle }}>
      <Card.Cover source={{ uri: article.urlToImage }} style={styles.image} />
      <Card.Content>
        <Title theme={{ colors: { text: colors.light } }}>
          {article.title.slice(0, 48) + "..."}
        </Title>
      </Card.Content>
      <Card.Actions>
        <Button mode="outlined">Read More</Button>
      </Card.Actions>
    </Card>
  );
};

export default NewsItem;
