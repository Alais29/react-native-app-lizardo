import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Surface, Switch, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import ScreenContainer from '../../Components/ScreenContainer';
import { logout } from '../../Features/auth/authSlice';
import { Theme } from '../../Features/interfaces';
import { changeTheme } from '../../Features/theme/themeSlice';
import { styles } from './styles';

const SettingsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const { theme } = useSelector(state => state.theme);

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
