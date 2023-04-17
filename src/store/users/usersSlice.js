import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Ueli Maurer",
    email: "ueleimaurer@gmail.com",
  },
  {
    id: 2,
    name: "Guy Parmelin",
    email: "guyparmelin@gmail.com",
  },
  {
    id: 3,
    name: "Karin Keller-Sutter",
    email: "karinkeller@gmail.com",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const usersList = state;
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
