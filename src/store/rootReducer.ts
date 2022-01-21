import { combineReducers } from "redux";

import userReducer from "./slices/userSlice";
import settingsReducer from "./slices/settingsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

export default rootReducer;
