import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useTheme, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import ScreenContainer from "../../Components/ScreenContainer";

import { styles } from "./styles";
import Button from "../../Components/Button";
import Link from "../../Components/Link";

const AuthMainScreen = ({ navigation }) => {
  const { theme } = useSelector((state) => state.theme);

  const { colors } = useTheme();

  const gradientColors =
    theme === "dark"
      ? ["rgba(28,14,5,0)", "rgba(28,14,5,0.9)"]
      : ["rgba(201, 158, 58, 0)", "rgba(201, 158, 58, 0.9)"];

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/authImage.png")}
        />
        <LinearGradient
          colors={gradientColors}
          style={{ ...styles.gradient }}
        />
        <View style={styles.btnContainer}>
          <Button
            color="surface"
            customBtnStyles={styles.customBtn}
            onPress={() => navigation.navigate("SignUpLogin", { to: "signup" })}
          >
            <Text>Sign Up</Text>
            <AntDesign
              name="right"
              size={14}
              color={colors.text}
              style={styles.btnIcon}
            />
          </Button>
        </View>
        <Link
          text="Already have an account? Log In"
          textColor={colors.header}
          customStyle={{ alignItems: "flex-end" }}
          onPress={() => navigation.navigate("SignUpLogin", { to: "signin" })}
        />
      </View>
    </ScreenContainer>
  );
};

export default AuthMainScreen;
