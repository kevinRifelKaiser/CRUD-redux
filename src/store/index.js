import { configureStore } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/usersSlice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    "crud-redux-app-storage",
    JSON.stringify(store.getState())
  );
};

const syncWithDataBase = (store) => (next) => (action) => {
  const { type, payload } = action;
  const initialState = store.getState().users;
  next(action);

  if (type === "users/deleteUser") {
    const userIdToDelete = payload;
    const userToDeleteData = initialState.find(
      (user) => user.id === userIdToDelete
    );
    fetch(`https://jsonplaceholder.typicode.dsfasf/users/${userIdToDelete}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`User ${userIdToDelete} correctly deleted`);
        }
      })
      .catch((err) => {
        toast.error(`There was an error, can't delete user ${userIdToDelete}`);
        store.dispatch(rollbackUser(userToDeleteData));
        console.log(err);
      });
  }
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDataBase],
});
