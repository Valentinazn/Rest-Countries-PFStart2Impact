import { configureStore } from "@reduxjs/toolkit";
import openReducer from "./features/open/openSlice";

import { countriesApi } from "./features/countries/countriesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    open: openReducer,

    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({}).concat([countriesApi.middleware]);
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
