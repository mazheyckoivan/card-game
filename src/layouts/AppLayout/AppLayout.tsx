import { FC, ReactNode } from "react";
import { Card } from "antd";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="app-layout">
      <Card className="app-content">{children}</Card>
    </div>
  );
};

export default AppLayout;
