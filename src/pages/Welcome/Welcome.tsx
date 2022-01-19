import { FC } from "react";
import { Link } from "react-router-dom";

const Welcome: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
      </nav>
    </div>
  );
};

export default Welcome;
