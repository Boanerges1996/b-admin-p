import { TypeOptions } from 'react-toastify';

export interface IResponse<T = unknown> {
  data?: T;
  error: boolean;
}

export interface INotificationState {
  message?: string;
  type: 'info' | 'success' | 'error' | 'warning' | TypeOptions;
  theme?: 'light' | 'dark';
  position?: 'top-right';
  autoClose?: number;
  hideProgressBar?: boolean;
  component?: 'antd' | 'react-toastify' | 'mui';
  description?: string;
}
