import { useAppDispatch } from "./store";
import { deleteUser, createUser } from "../store/users/usersSlice";

const useUserActions = () => {
  const dispatch = useAppDispatch();

  const onHandleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const onHandleCreate = (name, email) => {
    dispatch(createUser(name, email));
  };

  return { onHandleDelete, onHandleCreate };
};

export default useUserActions;
