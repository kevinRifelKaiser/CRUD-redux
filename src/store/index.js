import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    "crud-redux-app-storage",
    JSON.stringify(store.getState())
  );
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [persistanceLocalStorageMiddleware],
});
