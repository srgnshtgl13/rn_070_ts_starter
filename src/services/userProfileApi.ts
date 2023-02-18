import {api} from './api';

export interface UserMe {
  id?: number | string;
  firstname?: string;
  lastname?: string;
  email?: string;
  role?: string;
  authorities?: string[];
}
export const userProfileApi = api.injectEndpoints({
  endpoints: build => ({
    getMe: build.query<UserMe, void>({
      query: () => ({url: 'auth/me', method: 'get'}),
      providesTags: ['Profile'],
    }),
    /* updateProfile: build.mutation({
      query: () => ({url: '/mutation', method: 'post'}),
    }), */
  }),
});
export const {useGetMeQuery} = userProfileApi;
