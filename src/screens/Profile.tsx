import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import CustomText from '@components/CustomText';
import CustomCard from '@components/CustomCard';
import AppWrapper from '@components/AppWrapper';
import GlobalStyles from '@global/styles';

import {RootStackProps} from '@navigators/types';
import {users} from './Home';

const Profile: React.FC<RootStackProps<'Profile'>> = props => {
  const {userId} = props.route.params;
  const user = users.find(val => userId === val.userId);
  React.useEffect(() => {
    props.navigation.setOptions({
      title: 'Lorem ipsum dolor sitamet asdfghjklss',
    });
  }, [props.navigation]);

  return (
    <AppWrapper>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={[
          GlobalStyles.pd('5%', 'horizontal'),
          GlobalStyles.pd('3%', 'vertical'),
        ]}>
        <CustomCard style={GlobalStyles.pd('5%')}>
          <CustomText style={GlobalStyles.margin(10, 'bottom')} textType="bold">
            User id: {user?.userId}
          </CustomText>
          <CustomText
            style={GlobalStyles.margin(5, 'bottom')}
            textType="medium">
            User name: {user?.userName}
          </CustomText>
          <CustomText style={styles.bio} textType="light">
            User bio: {user?.bio}
          </CustomText>
        </CustomCard>
      </ScrollView>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  bio: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Profile;
