import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice.js";
import { productsApi } from "./productsApi.js";

export const storeTwo = configureStore({
  reducer: {
    cart: cartReducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Bytecorp example:
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredPaths: [apiSlice.reducerPath],
//       ignoredActionPaths: ["payload", "meta"],
//     },
//   }).concat(apiSlice.middleware),

// in the bytecorp code we are adding a check for un-serializable data.
// so we ant the rtk query to ignore the AbortSignal api becuase it might use functions that are not
// serializable int eh store
// we are ignoring the payload structure or matadata in the actions we created in the reducers
// but they are also concatinating the apiSlice middleware. even if we did not use those checks like I didnt
// we still need to concatenate the middleware
// the middleware is returned to use after we create the slice.
// this middleware is responsible for
// automated caching
// refetching
// loading/error state management
// request deduplication
// abort/cancel support (via signal)
// Without it, RTK Query won’t work correctly.
