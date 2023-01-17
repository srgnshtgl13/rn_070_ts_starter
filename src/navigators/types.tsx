// import type {NavigatorScreenParams} from '@react-navigation/native'; // @note: if HomeScreen is nested navigator
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

//___ Navigation PARAMS LISTS
export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
};
export type RootStackParamList = {
  Home: undefined;
  // Home: NavigatorScreenParams<HomeTabParamList>; // @note: if HomeScreen is nested navigator
  Profile: {userId: string | number};
};
// @note: if HomeScreen is nested navigator
/* export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
}; */

//___ Navigation PROPS
export type AuthStackProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface AuthParamList extends AuthStackParamList {}
  }
}
