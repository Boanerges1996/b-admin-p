import { AdminServiceUrls, axiosClient } from '@/util';

export class AdminService {
  static async getProfile({ id }: { id: string }) {
    try {
      const response = await axiosClient.get(
        AdminServiceUrls.admin.getProfile(id)
      );

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
  }
}
