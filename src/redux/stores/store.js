import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "firstlaunch",
  storage,
  blacklist: ["common"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
