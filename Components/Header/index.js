import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, useTheme, Avatar, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { setPhotoDownloadUrl } from '../../Features/auth/authSlice';
import { styles } from './styles';

const Header = ({ onPressSearch = () => {}, showSearch = true }) => {
  const { colors } = useTheme();
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useState(() => {
    if (!user.downloadUrl) {
      (async () => {
        const imgPathReference = ref(getStorage(), user.photoUrl);
        const downloadUrl = await getDownloadURL(imgPathReference);
        dispatch(setPhotoDownloadUrl(downloadUrl));
      })();
    }
  }, [user.downloadUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        {user.photoDownloadUrl ? (
          <Avatar.Image
            size={50}
            source={{ uri: user.photoDownloadUrl }}
            style={{ backgroundColor: colors.background }}
          />
        ) : null}
        <View style={styles.userInfo}>
          <Text style={{ ...styles.title, color: colors.header }}>
            Hi, {user.displayName}
          </Text>
          <Text style={{ ...styles.subtitle, color: colors.header }}>
            Welcome back
          </Text>
        </View>
      </View>
      <View style={styles.icons}>
        {showSearch && (
          <IconButton
            icon="magnify"
            color={colors.header}
            size={24}
            onPress={onPressSearch}
          />
        )}
        <IconButton
          icon="shopping-outline"
          color={colors.header}
          size={24}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default Header;
