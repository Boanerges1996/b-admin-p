'use client';

import { logoutAction, store } from '@/store';
import axios, { AxiosInstance } from 'axios';
import * as redux from 'redux';

const clientUrl = process.env.NEXT_PUBLIC_ADMIN_PANEL_URL;

export const axiosClient: AxiosInstance = axios.create({
  baseURL: clientUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const res = error?.response;

    if (res?.status === 401) {
      store.dispatch(logoutAction());
      window.location.href = `${clientUrl}`;
    }

    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use((config: any) => {
  const token = store?.getState().admin.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const client: AxiosInstance = axios.create({
  baseURL: clientUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
  timeout: 10000,
});

client.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const res = error?.response;

    if (res?.status === 401) {
      store.dispatch(logoutAction());
      window.location.href = `${clientUrl}`;
    }

    return Promise.reject(error);
  }
);

client.interceptors.request.use((config: any) => {
  const token = store.getState().admin.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const requestObject = async function (options) {
  const onSuccess = function (response) {
    // console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = function (error) {
    // console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      // console.error('Status:', error.response.status);
      // console.error('Data:', error.response.data);
      // console.error('Headers:', error.response.headers);

      if (error.response.status === 401) {
        store.dispatch(logoutAction());
        window.location.href = `${clientUrl}`;
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      // console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
