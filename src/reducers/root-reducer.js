import counterReducer from "./counter-reducer";

import LoginReducer from "./login-reducer";
import { combineReducers } from "redux";
import furnitureReducer from "./furniture-reducer";
import homeReducer from "./home-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  furniturestore: furnitureReducer,
  homestore: homeReducer,
  login: LoginReducer,
});

export default rootReducer;