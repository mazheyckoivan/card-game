import { FC } from "react";
import { Button, Input, Typography } from "antd";
import { useForm, Controller } from "react-hook-form";

import { IUser } from "../../shared/interfaces/User.interface";

import "./styles.css";

const { Title } = Typography;

interface Props {
  onSubmit(values: IUser): void;
}

const Login: FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<IUser>();

  return (
    <div className="login-screen">
      <Title underline className="title">
        Enter some data to collect your score
      </Title>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input placeholder="Enter first name" size="large" {...field} />
          )}
        />

        <Controller
          name="secondName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input placeholder="Enter second name" size="large" {...field} />
          )}
        />

        <Controller
          name="email"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Input placeholder="Enter email" size="large" {...field} />
          )}
        />

        <Button className="submit-button" htmlType="submit" type="primary">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Login;
