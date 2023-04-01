export interface IAdmin {
  firstname?: string;
  lastname?: string;
  othernames?: string;
  gender?: string;
  email?: string;
  phone?: string;
  blocked?: boolean;
  pic?: string;
  roles: string[];
  logged: boolean;
  _id?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  dob?: number | string;
  isBlocked?: boolean;
  isActive?: boolean;
}

export interface IAdminReducer {
  admins: {
    admins: IAdmin[];
    total: number;
  };
  logged: boolean;
  token: string;
  loginLoading: boolean;
  allAdminsLoading: boolean;
  isUpdationLoading: boolean;
  isDeletionLoading: boolean;
  loading: boolean;
  generalProfileUpdateLoading: boolean;
  getProfileLoading: boolean;
  updatePasswordLoading: boolean;
  isLoadingGetProfile: boolean;
  roles?: string[];
  pic?: string;
  data: {
    pic: string;
  };
  passwordReset?: IPasswordReset;
  isProfileUpdateLoading: boolean;
  _id?: string;
}

export interface IPasswordReset {
  password?: string;
  token?: string;
  adminId?: string;
  verifyingOtp?: boolean;
  passwordResetLoading?: boolean;
  resettingPassword?: boolean;
  forgotPasswordStatus?: 'pending' | 'loading' | 'success' | 'failure';
  verifyingOtpStatus?: 'pending' | 'loading' | 'success' | 'failure';
  resettingPasswordStatus?: 'pending' | 'loading' | 'success' | 'failure';
}

export interface IInterestTypes {
  name: string;
  _id?: string;
}

export interface IInterests {
  name: string;
  description: string;
  pic: string;
  interestType: IInterestTypes;
  creator: IAdmin;
  _id?: string;
}

export interface IInterestState {
  interestTypes: {
    interestTypes: IInterestTypes[];
    total: number;
  };
  interests: {
    interests: IInterests[];
    total: number;
  };
  loadingFetchInterestTypes: boolean;
  loadingFetchInterests: boolean;
  loadingCreateInterestType: boolean;
  loadingCreateInterest: boolean;
  loadingUpdateInterestType: boolean;
  loadingUpdateInterest: boolean;
}
