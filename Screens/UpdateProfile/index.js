import * as ImagePicker from 'expo-image-picker';
import { ref, getStorage, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  TextInput,
  useTheme,
  Text,
  Modal,
  Avatar,
  ActivityIndicator,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Components/Button';
import ScreenContainer from '../../Components/ScreenContainer';
import { updateProfileAsync } from '../../Features/auth/authSlice';
import { styles } from './styles';

const UpdateProfileScreen = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const { user, loading } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    setDisplayName(user.displayName);
    setPhotoUrl(user.photoDownloadUrl);
  }, [user.displayName, user.photoDownloadUrl]);

  const handlePickLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setPhotoUrl(result.uri);
      toggleModal();
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status !== 'granted') {
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });
    setPhotoUrl(image.uri);
    toggleModal();
  };

  const uploadImageAsync = async uri => {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    setUploading(true);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const imgUrl = `usersImages/${user.email}`;

    const fileRef = ref(getStorage(), imgUrl);
    await uploadBytes(fileRef, blob);

    blob.close();

    return imgUrl;
  };

  const handleUpdate = async () => {
    let uploadUrl = photoUrl;
    if (photoUrl.startsWith('file')) {
      uploadUrl = await uploadImageAsync(photoUrl);
    } else {
      uploadUrl = user.photoUrl;
    }
    setUploading(false);
    await dispatch(
      updateProfileAsync({
        idToken: user.token,
        displayName,
        photoUrl: uploadUrl,
      }),
    ).unwrap();
    if (route.params.settings) {
      navigation.navigate('Settings');
    }
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <ScreenContainer paddingBottom={false}>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <View style={styles.form}>
          <Text style={{ ...styles.title, color: colors.header }}>
            Please set your name and profile picture
          </Text>
          <View style={styles.imageInputContainer}>
            <View>
              {photoUrl ? (
                <TouchableOpacity onPress={toggleModal}>
                  <Avatar.Image
                    size={50}
                    source={{ uri: photoUrl }}
                    style={{ backgroundColor: colors.background }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={toggleModal}>
                  <Avatar.Image
                    size={50}
                    source={require('../../assets/plus.png')}
                    style={{ backgroundColor: colors.background }}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                label="Name"
                onChangeText={setDisplayName}
                value={displayName}
                dense
                theme={{ colors: { text: colors.header } }}
              />
            </View>
          </View>
          <Button
            onPress={handleUpdate}
            color="surface"
            disabled={!displayName || !photoUrl || uploading || loading}
          >
            {uploading || loading ? (
              <ActivityIndicator animating color={colors.text} />
            ) : (
              <Text style={{ fontFamily: 'Acme' }}>Confirm</Text>
            )}
          </Button>
        </View>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={{
            ...styles.modalContainerStyle,
            backgroundColor: colors.surface,
          }}
        >
          <Text style={styles.title}>
            How do you want to upload your image?
          </Text>
          <View style={styles.modalBtnsContainer}>
            <Button onPress={handleTakePicture}>
              <Text style={{ color: colors.header, fontFamily: 'Acme' }}>
                Take picture
              </Text>
            </Button>
            <Button onPress={handlePickLibrary}>
              <Text style={{ color: colors.header, fontFamily: 'Acme' }}>
                Open gallery
              </Text>
            </Button>
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default UpdateProfileScreen;
