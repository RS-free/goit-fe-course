import { createStore, applyMiddleWare } from "redux";
import { composeWithDevTools } from "redux-devtools-extansion";
import { persistStore } from "./redux-persist";
import rootReducer from "./rootReducer";
import logger from "./middlewares/logger";
import thunk from "./middlewares/thunk";

const middleware = [logger, thunk];

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleWare(...middleware))
);

export const persistor = persistStore(Store);
