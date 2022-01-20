import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ISettings } from "../../shared/interfaces/Settings.interface";

import Settings from "./Settings";

import "./styles.css";

const SettingsContainer: FC = () => {
  const navigate = useNavigate();

  const handleSubmitSettings = (values: ISettings) => {
    console.log(values);
  };

  return <Settings onSettingsSubmit={handleSubmitSettings} />;
};

export default SettingsContainer;
