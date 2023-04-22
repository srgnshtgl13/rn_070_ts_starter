import {type BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {type AxiosRequestConfig, AxiosError} from 'axios';
import {RootState} from '@store/store';
type TExtraHeaders = {
  [key: string]: string;
};
const axiosBaseQuery =
  (
    {
      baseUrl,
      extraHeaders,
    }: {
      baseUrl: string;
      extraHeaders?: TExtraHeaders;
    } = {
      baseUrl: '',
      extraHeaders: {},
    },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({url, method, data, params}, {getState}, extraOptions = {}) => {
    try {
      const rootState = getState() as RootState;
      let _headers = extraHeaders ? extraHeaders : {};
      if (rootState.auth.token !== null) {
        _headers.Authorization = `Bearer ${rootState.auth.token}`;
      }
      const res = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: _headers,
      });
      // console.log('axios.base-rtk: ', res.data);
      return {data: res.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      // console.log('axios base rtk: ', err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
