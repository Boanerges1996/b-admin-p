import { IResponse } from '@/common';
import { AuthServiceUrls, axiosClient } from '@/util';

export class AuthService {
  static login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<IResponse<any>> => {
    try {
      const response = await axiosClient.post(AuthServiceUrls.admin.login, {
        email,
        password,
      });

      return {
        error: false,
        data: response.data,
      };
    } catch (error: any) {
      return {
        error: true,
        data: error?.response?.data,
      };
    }
  };
}
