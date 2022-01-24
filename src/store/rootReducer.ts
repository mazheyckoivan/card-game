import { combineReducers } from "redux";

import userReducer from "../pages/Login/store/userSlice";
import settingsReducer from "../pages/Settings/store/settingsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

export default rootReducer;
