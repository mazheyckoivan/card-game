import { FC, ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="app-layout">
      <main className="app-content">{children}</main>
    </div>
  );
};

export default AppLayout;
