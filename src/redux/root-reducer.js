import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import storageSession from "redux-persist/lib/storage/session";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whiteList: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
