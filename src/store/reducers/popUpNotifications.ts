import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { toast } from 'react-toastify';
import { INotificationState } from '@/common';

const notificationSlice = createSlice({
  name: 'popupNotification',
  initialState: {},
  reducers: {
    showPopupNotificationAction: (
      state,
      action: PayloadAction<INotificationState>
    ) => {
      const {
        message,
        type = 'info',
        theme = 'light',
        position = 'top-right',
        autoClose = 3000,
        hideProgressBar = false,
        component = 'antd',
        description = '',
      } = action.payload;
      if (component === 'antd') {
        notification[type]({
          message,
          description,
        });
      } else {
        toast(message, {
          type,
          theme,
          position,
          autoClose,
          hideProgressBar,
        });
      }
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const { actions, reducer } = notificationSlice;
export const { showPopupNotificationAction } = actions;
export default reducer;
