import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../constants/routes";
import { IUser } from "../../interfaces/User.interface";
import { useAppDispatch } from "../../store/hooks";
import { setUserData } from "./store/userSlice";

import Login from "./Login";

const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IUser) => {
    dispatch(setUserData(values));
    navigate(ROUTES.settings);
  };

  return <Login onSubmit={handleSubmit} />;
};

export default LoginContainer;
