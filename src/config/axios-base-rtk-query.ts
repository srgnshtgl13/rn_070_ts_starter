import {type BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {type AxiosRequestConfig, AxiosError} from 'axios';
import {store} from '@store/store';
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
  async ({url, method, data, params}) => {
    try {
      let _headers = extraHeaders ? extraHeaders : {};
      if (store.getState().auth.token !== null) {
        _headers.Authorization = `Bearer ${store.getState().auth.token}`;
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
