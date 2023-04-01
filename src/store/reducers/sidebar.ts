import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarOpen: false,
    selectedItem: "0",
  },
  reducers: {
    toggleSidebar: (state) => {
      const localState = JSON.parse(localStorage.getItem("b-admin") ?? "{}");
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          ...localState,
          sidebar: { ...localState?.sidebar, sidebarOpen: !state.sidebarOpen },
        })
      );

      state.sidebarOpen = !state.sidebarOpen;
    },
    setSelectedItem: (state, action) => {
      const localState = JSON.parse(localStorage.getItem("b-admin") ?? "{}");
      localStorage.setItem(
        "b-admin",
        JSON.stringify({
          ...localState,
          sidebar: { ...localState?.sidebar, selectedItem: action.payload },
        })
      );
      state.selectedItem = action.payload;
    },
  },
});

export const { toggleSidebar, setSelectedItem } = sidebarSlice.actions;

export default sidebarSlice.reducer;
