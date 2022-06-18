import * as Linking from 'expo-linking';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

import { colors } from '../../../Styles/colors';
import { styles } from './styles';

const NewsItem = ({ article, cardStyle = {} }) => {
  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <Card style={{ ...styles.card, ...cardStyle }} onPress={handlePress}>
      <Card.Cover source={{ uri: article.urlToImage }} style={styles.image} />
      <Card.Content>
        <Title theme={{ colors: { text: colors.light } }} style={styles.title}>
          {article.title.slice(0, 46) + '...'}
        </Title>
        <Paragraph>{article.source.name}</Paragraph>
      </Card.Content>
    </Card>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
  }).isRequired,
  cardStyle: PropTypes.object,
};

export default NewsItem;
