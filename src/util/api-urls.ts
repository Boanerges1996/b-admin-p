import { ApiUrlFactory } from './api-factory';

export const ADMIN_SERVICE_URL = ApiUrlFactory.getAdminServiceBaseUrl();
export const ANALYTICS_SERVICE_URL = ApiUrlFactory.getAnalyticsServiceBaseUrl();
export const AUTH_SERVICE_URL = ApiUrlFactory.getAuthServiceBaseUrl();

export const AdminServiceUrls = {
  admin: {
    getAllAdmins: `${ADMIN_SERVICE_URL}/admin/get/all`,
    powerCreate: `${ADMIN_SERVICE_URL}/admin/power/create`,
    create: `${ADMIN_SERVICE_URL}/admin/create`,
    forgotPassword: `${ADMIN_SERVICE_URL}/admin/forgot-password`,
    verifyPasswordResetCode: `${ADMIN_SERVICE_URL}/admin/verify-password-reset`,
    resetPassword: `${ADMIN_SERVICE_URL}/admin/change-password`,

    getProfile: (adminId: string) =>
      `${ADMIN_SERVICE_URL}/admin/get/one/${adminId}`,
    updateProfile: (adminId: string) =>
      `${ADMIN_SERVICE_URL}/admin/profile/update/${adminId}`,
    update: (adminId: string) => `${ADMIN_SERVICE_URL}/admin/update/${adminId}`,
    toggleActiveStatus: (adminId: string) =>
      `${ADMIN_SERVICE_URL}/admin/toggle/activeStatus/${adminId}`,
    toggleBlockStatus: (adminId: string) =>
      `${ADMIN_SERVICE_URL}/admin/toggle/blockedStatus/${adminId}`,
    delete: (adminId: string) => `${ADMIN_SERVICE_URL}/admin/delete/${adminId}`,
  },
};

export const AuthServiceUrls = {
  admin: {
    login: `${AUTH_SERVICE_URL}/admin/login`,
    logout: `${AUTH_SERVICE_URL}/admin/logout`,
  },
};
