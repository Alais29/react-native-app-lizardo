import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, useTheme, Text, Modal, Avatar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../../utils/renamePathAndMove";
import { fbStorage } from "../../Database/firebase";
import { updateProfileAsync } from "../../Features/auth/authSlice";
import ScreenContainer from "../../Components/ScreenContainer";
import Button from "../../Components/Button";

import { styles } from "./styles";

const UpdateProfile = () => {
  const [visible, setVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [fbPhotoUrl, setFbPhotoUrl] = useState("");

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { colors } = useTheme();

  const handlePickLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUrl(result.uri);
      setPhoto(result);
      toggleModal();
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status !== "granted") {
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
      quality: 0.8,
    });
    setPhotoUrl(image.uri);
    setPhoto(image);
    toggleModal();
  };

  const uploadImageAsync = async (uri) => {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const fileRef = ref(getStorage(), user.email);
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  };

  const handleUpdate = async () => {
    // const path = await renamePathAndMove(photoUrl);

    const uploadUrl = await uploadImageAsync(photoUrl);
    setFbPhotoUrl(uploadUrl);

    console.log("uploadUrl", uploadUrl);

    // const storageRef = ref(fbStorage, `images/users/${user.email}.jpg`);
    // const uploadTask = uploadBytesResumable(storageRef, photo);
    // uploadTask.on(
    //   "state_changed",
    //   () => {},
    //   (error) => console.log(error),
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //       setFbPhotoUrl(downloadURL);
    //     });
    //   }
    // );

    // console.log({ idToken: user.token, displayName, photoUrl: fbPhotoUrl });
    // dispatch(
    //   updateProfileAsync({ idToken: user.token, displayName, photoUrl })
    // );
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
                    source={require("../../assets/plus.png")}
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
                dense={true}
                theme={{ colors: { text: colors.header } }}
              />
            </View>
          </View>
          <Button
            onPress={handleUpdate}
            color="surface"
            disabled={!displayName || !photoUrl}
          >
            <Text>Confirm</Text>
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
              <Text style={{ color: colors.header }}>Take picture</Text>
            </Button>
            <Button onPress={handlePickLibrary}>
              <Text style={{ color: colors.header }}>Open gallery</Text>
            </Button>
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default UpdateProfile;
