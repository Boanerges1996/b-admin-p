import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebar";
import adminReducer from "./reducers/admin/admin";
import popupNotificationReducer from "./reducers/popUpNotifications";

const rehydrateState = () => {
  const preloadedState =
    typeof window !== "undefined" && localStorage.getItem("b-admin")
      ? JSON.parse(localStorage.getItem("b-admin") || "{}")
      : {};

  return preloadedState;
};

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    sidebar: sidebarReducer,
    popupNotification: popupNotificationReducer,
  },
  devTools: true,
  preloadedState: rehydrateState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
