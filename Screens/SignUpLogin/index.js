import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  TextInput,
  Text,
  useTheme,
  HelperText,
  ActivityIndicator,
} from 'react-native-paper';
import Toast from 'react-native-toast-message';
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

  const handleSignInUp = async values => {
    if (to === 'signup') {
      try {
        await dispatch(signUpAsync(values)).unwrap();
        navigation.navigate('UpdateProfile');
      } catch (e) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2:
            e.error.message === 'EMAIL_EXISTS'
              ? "There's already an account using that email."
              : 'There was an issue signing you up. Please try later.',
        });
      }
    } else {
      try {
        await dispatch(signInAsync(values)).unwrap();
        if (!user.displayName) {
          navigation.navigate('UpdateProfile');
        }
      } catch (e) {
        let text = '';
        switch (e.error.message) {
          case 'EMAIL_NOT_FOUND':
          case 'INVALID_PASSWORD':
            text =
              'Email or password are incorrect, please verify and try again.';
            break;
          case 'USER_DISABLED':
            text = 'This user has been disabled';
            break;
          default:
            text = 'There was an issue signing you in. Please try again later.';
            break;
        }
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: text,
        });
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
            onSubmit={handleSignInUp}
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
                  theme={{
                    colors: { text: colors.header, placeholder: colors.header },
                  }}
                  underlineColor={colors.surface}
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
                  theme={{
                    colors: { text: colors.header, placeholder: colors.header },
                  }}
                  underlineColor={colors.surface}
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
                      theme={{
                        colors: {
                          text: colors.header,
                          placeholder: colors.header,
                        },
                      }}
                      underlineColor={colors.surface}
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
                  {isSubmitting ? (
                    <ActivityIndicator animating color={colors.text} />
                  ) : (
                    <Text style={{ fontFamily: 'Acme' }}>
                      {to === 'signup' ? 'Sign Up' : 'Log In'}
                    </Text>
                  )}
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
