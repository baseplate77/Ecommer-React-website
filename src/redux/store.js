import { createStore, applyMiddleware } from "redux";
// for redux debuging (clg the state)
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import RootReducer from "./root-reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
