import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Surface, Switch, Text } from "react-native-paper";
import { changeTheme } from "../../Features/theme/themeSlice";
import { Theme } from "../../Features/interfaces";
import ScreenContainer from "../../Components/ScreenContainer";

import { styles } from "./styles";
import { logout } from "../../Features/auth/authSlice";

const SettingsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsSwitchOn(theme === Theme.dark);
  }, [theme]);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    dispatch(changeTheme());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <View style={styles.setting}>
            <Text style={styles.text}>Dark Mode</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
          <View style={styles.setting}>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
          </View>
        </Surface>
      </View>
    </ScreenContainer>
  );
};

export default SettingsScreen;
