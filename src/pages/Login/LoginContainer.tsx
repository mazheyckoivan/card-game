import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../shared/interfaces/User.interface";
import { useAppDispatch } from "../../store/hooks";
import { setUserData } from "../../store/slices/userSlice";

import Login from "./Login";

const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IUser) => {
    dispatch(setUserData(values));
    navigate("/game-settings");
  };

  return <Login onSubmit={handleSubmit} />;
};

export default LoginContainer;
