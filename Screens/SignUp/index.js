import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, useTheme } from "react-native-paper";
import Button from "../../Components/Button";
import Link from "../../Components/Link";
import ScreenContainer from "../../Components/ScreenContainer";

import { styles } from "./styles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { colors } = useTheme();

  return (
    <ScreenContainer paddingBottom={false}>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <View style={styles.form}>
          <Text style={{ ...styles.title, color: colors.header }}>SignUp</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ ...styles.input }}
            dense={true}
            theme={{ colors: { text: colors.header } }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ ...styles.input }}
            dense={true}
            theme={{ colors: { text: colors.header } }}
            secureTextEntry={true}
          />
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={{ ...styles.input }}
            dense={true}
            theme={{ colors: { text: colors.header } }}
            secureTextEntry={true}
          />
          <Button color="surface" onPress={() => {}}>
            <Text>Sign Up</Text>
          </Button>
          <Link
            text="Already have an account? Log In"
            textColor={colors.header}
            customStyle={{ alignItems: "center" }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SignUp;
