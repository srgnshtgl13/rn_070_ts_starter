import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import AppConstants from './app.constants';

const axiosInstance = axios.create({
  baseURL: AppConstants.baseApiUrl,
});

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // console.info(`[request] [${JSON.stringify(config)}]`);
  const authState = store?.getState()?.auth;
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!authState?.token) {
    config.headers.Authorization = `Bearer ${authState.token}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export const GlobalApiConfig = axiosInstance;
