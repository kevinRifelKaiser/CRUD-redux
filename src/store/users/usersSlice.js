import { v4 as uuidv4 } from "uuid";
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

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const usersList = state;
      return state.filter((user) => user.id !== action.payload);
    },
    createUser: (state, actions) => {
      const id = uuidv4();
      const { name, email } = actions.payload;
      const newUser = new User(name, email);
      console.log(newUser);
      return [...state, { id, ...newUser }];
    },
  },
});

export const { deleteUser, createUser } = usersSlice.actions;

export default usersSlice.reducer;
