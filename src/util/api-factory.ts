export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const isDev = process.env.NODE_ENV === 'development';

export class ApiUrlFactory {
  static getAdminServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5200/admin/service`
      : `${SERVER_URL}/admin/service`;
  }

  static getAnalyticsServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5201/analytics/service`
      : `${SERVER_URL}/analytics/service`;
  }

  static getAuthServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5202/auth/service`
      : `${SERVER_URL}/auth/service`;
  }

  static getCartServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5203/cart/service`
      : `${SERVER_URL}/cart/service`;
  }

  static getFeedbackServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5204/feedback/service`
      : `${SERVER_URL}/feedback/service`;
  }

  static getGeolocationServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5205/geolocation/service`
      : `${SERVER_URL}/geolocation/service`;
  }

  static getLoyaltyServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5206/loyalty/service`
      : `${SERVER_URL}/loyalty/service`;
  }

  static getMenuServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5207/menu/service`
      : `${SERVER_URL}/menu/service`;
  }

  static getNotificationServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5208/notification/service`
      : `${SERVER_URL}/notification/service`;
  }

  static getOrderFulfillmentServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5209/order-fulfillment/service`
      : `${SERVER_URL}/order-fulfillment/service`;
  }

  static getOrderServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5210/order/service`
      : `${SERVER_URL}/order/service`;
  }

  static getOutletServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5211/outlet/service`
      : `${SERVER_URL}/outlet/service`;
  }

  static getPartnerServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5212/partner/service`
      : `${SERVER_URL}/partner/service`;
  }

  static getPaymentServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5213/payment/service`
      : `${SERVER_URL}/payment/service`;
  }

  static getPhuberServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5214/phuber/service`
      : `${SERVER_URL}/phuber/service`;
  }

  static getPromotionServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5215/promotion/service`
      : `${SERVER_URL}/promotion/service`;
  }

  static getRatingAndReviewServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5216/rating-and-review/service`
      : `${SERVER_URL}/rating-and-review/service`;
  }

  static getRecommendationServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5217/recommendation/service`
      : `${SERVER_URL}/recommendation/service`;
  }

  static getStoriesServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5218/stories/service`
      : `${SERVER_URL}/stories/service`;
  }

  static getTableServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5219/table/service`
      : `${SERVER_URL}/table/service`;
  }

  static getUserServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5220/user/service`
      : `${SERVER_URL}/user/service`;
  }

  static getPostServiceBaseUrl() {
    return isDev
      ? `${SERVER_URL}:5221/post/service`
      : `${SERVER_URL}/post/service`;
  }
}
