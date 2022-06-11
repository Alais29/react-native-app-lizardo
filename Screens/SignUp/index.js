import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, useTheme, HelperText } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Components/Button';
import Link from '../../Components/Link';
import ScreenContainer from '../../Components/ScreenContainer';
import { signInAsync, signUpAsync } from '../../Features/auth/authSlice';
import {
  signinValidationSchema,
  signupValidationSchema,
} from '../../utils/yupValidation';
import { styles } from './styles';

const SignUpLogin = ({ navigation, route }) => {
  const { user } = useSelector(state => state.auth);
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const { to } = route.params;

  const handleSignUp = async values => {
    if (to === 'signup') {
      try {
        await dispatch(signUpAsync(values)).unwrap();
        navigation.navigate('UpdateProfile');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await dispatch(signInAsync(values)).unwrap();
        if (!user.displayName) {
          navigation.navigate('UpdateProfile');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const initialValues =
    to === 'signup'
      ? { email: '', password: '', confirmPassword: '' }
      : { email: '', password: '' };

  return (
    <ScreenContainer paddingBottom={false}>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <View style={styles.form}>
          <Text style={{ ...styles.title, color: colors.header }}>
            {to === 'signup' ? 'Sign Up' : 'Log In'}
          </Text>
          <Formik
            onSubmit={handleSignUp}
            initialValues={initialValues}
            validationSchema={
              to === 'signup' ? signupValidationSchema : signinValidationSchema
            }
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({
              handleChange,
              errors,
              handleSubmit,
              values,
              handleBlur,
              isSubmitting,
            }) => (
              <>
                <TextInput
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email}
                  dense
                  theme={{ colors: { text: colors.header } }}
                />
                <HelperText type="error" visible={errors.email}>
                  {errors.email}
                </HelperText>
                <TextInput
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password}
                  secureTextEntry
                  dense
                  theme={{ colors: { text: colors.header } }}
                />
                <HelperText type="error" visible={errors.password}>
                  {errors.password}
                </HelperText>
                {to === 'signup' ? (
                  <>
                    <TextInput
                      label="Confirm Password"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      secureTextEntry
                      dense
                      theme={{ colors: { text: colors.header } }}
                    />
                    <HelperText type="error" visible={errors.confirmPassword}>
                      {errors.confirmPassword}
                    </HelperText>
                  </>
                ) : null}
                <Button
                  color="surface"
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text>{to === 'signup' ? 'Sign Up' : 'Log In'}</Text>
                </Button>
                <Link
                  text={
                    to === 'signup'
                      ? 'Already have an account? Log In'
                      : "Don't have an account? Sign Up"
                  }
                  textColor={colors.header}
                  customStyle={{ alignItems: 'center' }}
                  onPress={() =>
                    navigation.navigate('SignUpLogin', {
                      to: to === 'signup' ? 'signin' : 'signup',
                    })
                  }
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SignUpLogin;
