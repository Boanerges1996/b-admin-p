namespace NodeJs {
  interface ProcessEnv {
    /**
     * Current node environment.
     * Usually `development`, `test`, or `production`.
     * Sometimes `storybook` or `staging`.
     * Could be not defined.
     */
    NODE_ENV?: string;

    /**
     * URL of the admin panel.
     */
    ADMIN_PANEL_URL: string;

    /**
     * URL of the API.
     * @example https://api.example.com
     * @example https://api.example.com/v1
     */
    API_URL: string;
  }
}
