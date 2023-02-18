import React from 'react';
import {ScrollView, View} from 'react-native';

import AppWrapper from '@components/AppWrapper';
import GlobalStyles from '@global/styles';

import {AuthStackProps} from '@navigators/types';
import ThemedTextInput from '@components/ThemedTextInput';
import PrimaryButton from '@components/PrimaryButton';
import CustomText from 'components/CustomText';

import {register, setError} from '@store/authSlice';
import {useAppDispatch, useAppSelector} from '@store/hooks';

import {RegisterRequest} from '@global/types';

const Register: React.FC<AuthStackProps<'Register'>> = props => {
  React.useEffect(() => {
    props.navigation.setOptions({
      title: 'Register',
    });
  }, [props.navigation]);
  const [form, setForm] = React.useState<RegisterRequest>({
    email: '',
    firstname: '',
    password: '',
  });
  const {error, pending} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const _onChangeText = (field: string, value: string) => {
    setForm({...form, [field]: value});
  };
  const _onSubmit = () => {
    if (!form.email || !form.password || !form.firstname) {
      dispatch(setError('Bad credentials!'));
      return;
    }
    dispatch(register(form));
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
            value={form?.firstname}
            onChangeText={text => _onChangeText('firstname', text)}
            label="First Name"
            containerStyle={GlobalStyles.margin('2%', 'bottom')}
            key={'firstname'}
          />
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

          <PrimaryButton label="Send" onPress={_onSubmit} pending={pending} />
          {error && (
            <CustomText
              error
              style={[
                GlobalStyles.margin('4%', 'top'),
                GlobalStyles.alignSelf('center'),
              ]}>
              {error}
            </CustomText>
          )}
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

export default Register;
