import { AdminService, AuthService } from '@/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAdmin,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  showPopupNotificationAction,
} from '../reducers';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (
    payload: { email: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(loginAction({}));
      const response = await AuthService.login(payload);

      if (response.error) {
        const errorMessages = response.data.message;
        dispatch(
          showPopupNotificationAction({
            message: errorMessages,
            type: 'error',
          })
        );
        dispatch(loginFailureAction());
        return false;
      }

      const token = response.data.token;
      const adminLoginData: IAdmin = response.data?.data;

      dispatch(loginAction({ token, ...adminLoginData }));

      const adminProfileRequest = await AdminService.getProfile({
        id: adminLoginData._id ?? '',
      });
      if (!adminProfileRequest.error) {
        const adminProfile: IAdmin = adminProfileRequest.data?.data;
        dispatch(loginSuccessAction({ ...adminProfile }));

        return true;
      }

      dispatch(loginFailureAction());

      return false;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
