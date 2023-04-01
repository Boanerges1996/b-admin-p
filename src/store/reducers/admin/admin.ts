import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAdminReducer } from "./interface";

const initialState: IAdminReducer = {
  logged: false,
  admins: {
    total: 0,
    admins: [],
  },
  token: "",
  loginLoading: false,
  allAdminsLoading: false,
  isUpdationLoading: false,
  isDeletionLoading: false,
  isProfileUpdateLoading: false,
  isLoadingGetProfile: false,
  loading: false,
  generalProfileUpdateLoading: false,
  getProfileLoading: false,
  updatePasswordLoading: false,
  pic: "",
  _id: "",
  data: {
    pic: "",
  },
  passwordReset: {
    passwordResetLoading: false,
    verifyingOtp: false,
    forgotPasswordStatus: "pending",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logoutAction: () => {
      localStorage.removeItem("b-admin");
      return initialState;
    },
    loginAction: (state, action: PayloadAction<object>) => {
      const { payload } = action;
      return {
        ...state,
        loginLoading: true,
        ...payload,
      };
    },
    loginSuccessAction: (state, action) => {
      const { payload } = action;
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          admin: {
            ...state,
            ...payload,
            logged: true,
          },
        })
      );

      return {
        ...state,
        ...payload,
        loginLoading: false,
        logged: true,
      };
    },
    loginFailureAction: (state) => {
      return {
        ...state,
        // ...payload,
        loginLoading: false,
        logged: false,
      };
    },
    profileUpdateAction: (state) => {
      return {
        ...state,
        isProfileUpdateLoading: true,
      };
    },
    profileUpdateSuccessAction: (state, action) => {
      const { payload } = action;
      const adminData = JSON.parse(localStorage.getItem("b-admin") ?? "{}");
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          ...adminData,
          admin: {
            ...adminData.admin,
            ...payload,
          },
        })
      );
      return {
        ...state,
        ...adminData.data,
        ...payload,
        isProfileUpdateLoading: false,
      };
    },
    profileUpdateFailureAction: (state) => {
      return {
        ...state,
        isProfileUpdateLoading: false,
      };
    },
    getProfileAction: (state) => {
      return {
        ...state,
        getProfileLoading: true,
      };
    },
    getProfileSuccessAction: (state, action) => {
      const { payload } = action;
      const adminData = JSON.parse(localStorage.getItem("b-admin") ?? "{}");
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          ...adminData,
          admin: {
            ...adminData.admin,
            ...payload,
          },
        })
      );

      return {
        ...state,
        ...adminData.admin,
        ...payload,
        getProfileLoading: false,
      };
    },
    getProfileFailureAction: (state) => {
      return {
        ...state,
        getProfileLoading: false,
      };
    },

    getAllAdminsAction: (state) => {
      return {
        ...state,
        allAdminsLoading: true,
      };
    },
    getAllAdminsSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        allAdminsLoading: false,
        admins: payload,
      };
    },
    getAllAdminsFailureAction: (state) => {
      return {
        ...state,
        allAdminsLoading: false,
      };
    },
    updateAdminAction: (state) => {
      return {
        ...state,
        isUpdationLoading: true,
      };
    },
    updateAdminSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        isUpdationLoading: false,
        admins: {
          ...state.admins,
          admins: state.admins.admins.map((admin) => {
            if (admin._id === payload._id) {
              return payload;
            }
            return admin;
          }),
        },
      };
    },
    updateAdminFailureAction: (state) => {
      return {
        ...state,
        isUpdationLoading: false,
      };
    },

    deleteAdminAction: (state) => {
      return {
        ...state,
        isDeletionLoading: true,
      };
    },
    deleteAdminSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        isDeletionLoading: false,
        admins: {
          ...state.admins,
          admins: state.admins.admins.filter(
            (admin) => admin._id !== payload._id
          ),
          total: state.admins.total - 1,
        },
      };
    },
    deleteAdminFailureAction: (state) => {
      return {
        ...state,
        isDeletionLoading: false,
      };
    },
    addAdminAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    addAdminSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        admins: {
          ...state.admins,
          admins: [payload, ...state.admins.admins],
          total: state.admins.total + 1,
        },
        loading: false,
      };
    },
    addAdminFailureAction: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    updateGeneralProfileAction: (state) => {
      return {
        ...state,
        generalProfileUpdateLoading: true,
      };
    },
    updateGeneralProfileSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        generalProfileUpdateLoading: false,
        ...payload,
      };
    },
    updateGeneralProfileFailureAction: (state) => {
      return {
        ...state,
        generalProfileUpdateLoading: false,
      };
    },
    getAdminProfileAction: (state) => {
      return {
        ...state,
        getProfileLoading: true,
      };
    },
    getAdminProfileSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        getProfileLoading: false,
        ...payload,
      };
    },
    getAdminProfileFailureAction: (state) => {
      return {
        ...state,
        getProfileLoading: false,
      };
    },
    updatePasswordAction: (state) => {
      return {
        ...state,
        updatePasswordLoading: true,
      };
    },

    updatePasswordSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        updatePasswordLoading: false,
        ...payload,
      };
    },
    updatePasswordFailureAction: (state) => {
      return {
        ...state,
        updatePasswordLoading: false,
      };
    },
    forgotPasswordAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          passwordResetLoading: true,
          forgotPasswordStatus: "loading",
        },
      };
    },
    forgotPasswordSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          passwordResetLoading: false,
          ...payload,
          forgotPasswordStatus: "success",
        },
      };
    },
    forgotPasswordFailureAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          passwordResetLoading: false,
          forgotPasswordStatus: "failure",
        },
      };
    },
    verifyOtpAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          verifyingOtp: true,
          verifyingOtpStatus: "loading",
        },
      };
    },
    verifyOtpSuccessAction: (state, action) => {
      const { payload } = action;
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          admin: {
            token: payload.passwordResetToken,
          },
        })
      );
      return {
        ...state,
        token: payload.passwordResetToken,
        passwordReset: {
          ...state.passwordReset,
          verifyingOtp: false,
          ...payload,
          verifyingOtpStatus: "success",
        },
      };
    },
    verifyOtpFailureAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          verifyingOtp: false,
          verifyingOtpStatus: "failure",
        },
      };
    },
    resetPasswordAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          resettingPassword: true,
          resettingPasswordStatus: "loading",
        },
      };
    },
    resetPasswordSuccessAction: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          resettingPassword: false,
          ...payload,
          resettingPasswordStatus: "success",
        },
      };
    },
    resetPasswordFailureAction: (state) => {
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          resettingPassword: false,
          resettingPasswordStatus: "failure",
        },
      };
    },
  },
});

const { actions, reducer } = adminSlice;

export const {
  addAdminAction,
  addAdminFailureAction,
  addAdminSuccessAction,
  deleteAdminAction,
  deleteAdminFailureAction,
  deleteAdminSuccessAction,
  getAllAdminsAction,
  getAllAdminsFailureAction,
  getAllAdminsSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  logoutAction,
  updateAdminAction,
  updateAdminFailureAction,
  updateAdminSuccessAction,
  updateGeneralProfileAction,
  updateGeneralProfileFailureAction,
  updateGeneralProfileSuccessAction,
  getAdminProfileAction,
  getAdminProfileFailureAction,
  getAdminProfileSuccessAction,
  updatePasswordAction,
  updatePasswordFailureAction,
  updatePasswordSuccessAction,
  forgotPasswordAction,
  forgotPasswordFailureAction,
  forgotPasswordSuccessAction,
  verifyOtpAction,
  verifyOtpFailureAction,
  verifyOtpSuccessAction,
  resetPasswordAction,
  resetPasswordFailureAction,
  resetPasswordSuccessAction,
  profileUpdateAction,
  profileUpdateFailureAction,
  profileUpdateSuccessAction,
  getProfileAction,
  getProfileFailureAction,
  getProfileSuccessAction,
} = actions;

export default reducer;
