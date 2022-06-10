import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  HelperText,
  TextInput,
  useTheme,
  Text,
  Modal,
  Avatar,
} from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import ScreenContainer from "../../Components/ScreenContainer";
import Button from "../../Components/Button";
import { updateProfileAsync } from "../../Features/auth/authSlice";

import { styles } from "./styles";

const UpdateProfile = () => {
  const [visible, setVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [errorDisplayName, setErrorDisplayName] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [errorPhotoUrl, setErrorPhotoUrl] = useState("");

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { colors } = useTheme();

  const handleUpdate = async () => {
    dispatch(
      updateProfileAsync({ idToken: user.UserID, displayName, photoUrl })
    );
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
                <Avatar.Image
                  size={50}
                  source={{ uri: photoUrl }}
                  style={{ backgroundColor: colors.background }}
                />
              ) : (
                <TouchableOpacity onPress={toggleModal}>
                  <Avatar.Image
                    size={50}
                    source={require("../../assets/img_avatar.png")}
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
              <HelperText type="error" visible={errorDisplayName}>
                A name is required
              </HelperText>
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
            <Button onPress={() => console.log("Take picture")}>
              <Text style={{ color: colors.header }}>Take picture</Text>
            </Button>
            <Button onPress={() => console.log("Choose from gallery")}>
              <Text style={{ color: colors.header }}>Open gallery</Text>
            </Button>
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default UpdateProfile;
