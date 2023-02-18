import React from 'react';
import {ScrollView, View} from 'react-native';

import ThemedTextInput from '@components/ThemedTextInput';
import PrimaryButton from '@components/PrimaryButton';
import CustomText from '@components/CustomText';
import AppWrapper from '@components/AppWrapper';
import GlobalStyles from '@global/styles';

import {AuthStackProps} from '@navigators/types';
import {useAppSelector, useAppDispatch} from '@store/hooks';
import {login, setError} from '@store/authSlice';
import {LoginRequest} from '@global/types';

const Login: React.FC<AuthStackProps<'Login'>> = props => {
  React.useEffect(() => {
    props.navigation.setOptions({
      title: 'Login',
    });
  }, [props.navigation]);
  const dispatch = useAppDispatch();
  const [form, setForm] = React.useState<LoginRequest>({
    email: '',
    password: '',
  });
  const {error, pending} = useAppSelector(state => state.auth);
  const _onChangeText = (field: string, value: string) => {
    setForm({...form, [field]: value});
  };
  const _onSubmit = () => {
    if (!form.email || !form.password) {
      dispatch(setError('Bad credentials!'));
      return;
    }
    dispatch(login(form));
  };
  return (
    <AppWrapper>
      <View style={GlobalStyles.Flex(1)}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={[
            GlobalStyles.pd('5%', 'horizontal'),
            GlobalStyles.pd('2%', 'top'),
          ]}>
          <ThemedTextInput
            value={form?.email}
            onChangeText={text => _onChangeText('email', text)}
            label="Email or Username"
            containerStyle={GlobalStyles.margin('2%', 'bottom')}
            key={'email'}
          />
          <ThemedTextInput
            value={form?.password}
            onChangeText={text => _onChangeText('password', text)}
            label="Password"
            secureTextEntry={true}
            containerStyle={GlobalStyles.margin('4%', 'bottom')}
            key={'password'}
          />

          <PrimaryButton
            label="Send"
            onPress={_onSubmit}
            containerStyle={GlobalStyles.margin('2%', 'bottom')}
            pending={pending}
          />

          <PrimaryButton
            label="Dont you have an account? Register"
            onPress={() => props.navigation.navigate('Register')}
            variant="link"
          />

          {error && (
            <CustomText
              textType="bold"
              style={[
                GlobalStyles.margin('4%', 'top'),
                GlobalStyles.alignSelf('center'),
              ]}
              error>
              {error}
            </CustomText>
          )}
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

export default Login;
