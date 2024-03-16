import { configureStore } from "@reduxjs/toolkit"

import { productsSlice } from "../features/shopping-cart/productsSlice"
import { productsApiSlice } from "../features/shopping-cart/productsApiSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(productsApiSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]
