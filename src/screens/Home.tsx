import React from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';

import CustomText from '@components/CustomText';
import AppWrapper from '@components/AppWrapper';
import GlobalStyles from '@global/styles';

import {RootStackProps} from '@navigators/types';
import CustomCard from '@components/CustomCard';
import PrimaryButton from '@components/PrimaryButton';

import {useAppDispatch} from '@store/hooks';
import {logout} from '@store/authSlice';
import {userProfileApi} from '@services/userProfileApi';
import LogoutSvg from '@icons/LogoutSvg';

/* const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <CustomText style={styles.sectionTitle}>{title}</CustomText>
      <CustomText style={styles.sectionDescription}>{children}</CustomText>
    </View>
  );
}; */
interface IUser {
  userId: string | number;
  userName: string;
  bio?: string;
}
export const users: IUser[] = [
  {userId: 1, userName: 'User 1', bio: 'wasdasd sadasdasd'},
  {userId: 2, userName: 'User 2', bio: 'asdfghjkl'},
  {userId: 3, userName: 'User 3', bio: 'asdfghjkl'},
  {userId: 4, userName: 'User 4', bio: 'asdfghjkl'},
  {userId: 5, userName: 'User 5', bio: 'asdfghjkl'},
  {userId: 6, userName: 'User 6', bio: 'asdfghjkl'},
  {userId: 7, userName: 'User 7', bio: 'asdfghjkl'},
  {userId: 8, userName: 'User 8', bio: 'asdfghjkl'},
  {userId: 9, userName: 'User 9', bio: 'asdfghjkl'},
  {userId: 10, userName: 'User 10', bio: 'asdfghjkl'},
];
const Home: React.FC<RootStackProps<'Home'>> = props => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={GlobalStyles.flexDirection('row')}>
          <CustomText textType="bold">App Name/App Logo</CustomText>
        </View>
      ),
      headerRight: () => (
        <View
          style={[
            GlobalStyles.flexDirection('row'),
            GlobalStyles.margin('-12%', 'right'),
          ]}>
          <PrimaryButton
            onPress={() => {
              dispatch(userProfileApi.endpoints.getMe.initiate()).unsubscribe();
              dispatch(logout());
            }}>
            <LogoutSvg width="25" height="25" color="#FFF" />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => {
              dispatch(userProfileApi.endpoints.getMe.initiate()).unsubscribe();
              dispatch(logout());
            }}>
            <LogoutSvg width="25" height="25" color="#FFF" />
          </PrimaryButton>
        </View>
      ),
    });
  }, [dispatch, props.navigation]);
  return (
    <AppWrapper>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={[
          GlobalStyles.pd('5%', 'horizontal'),
          GlobalStyles.pd('2%', 'top'),
        ]}>
        {users.map(user => (
          <CustomCard
            key={user.userId}
            style={[
              GlobalStyles.pd('5%', 'horizontal'),
              GlobalStyles.pd('3%', 'vertical'),
              GlobalStyles.margin('2%', 'bottom'),
            ]}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Profile', {userId: user.userId})
              }>
              <CustomText
                style={[styles.sectionTitle, GlobalStyles.margin(10, 'bottom')]}
                textType="bold">
                {user.userName}
              </CustomText>
              <CustomText textType="light" style={styles.sectionDescription}>
                {user.bio}
              </CustomText>
            </TouchableOpacity>
          </CustomCard>
        ))}
      </ScrollView>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Home;
