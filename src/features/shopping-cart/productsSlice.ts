import { createSlice } from "@reduxjs/toolkit"

import productsApiSlice from "./productsApiSlice"

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

const initialState: Product[] = []

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.find(product => product.id === action.payload)

      if (product && product.stock < 10) product.stock += 1
    },
    decrement: (state, action) => {
      const product = state.find(product => product.id === action.payload)

      if (product && product.stock > 1) {
        product.stock -= 1
      }
    },
    deleteProduct: (state, action) => {
      const newState = state.filter(p => p.id !== action.payload)
      return newState
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      productsApiSlice.endpoints.getProducts.matchFulfilled,
      (state, action) => (state = action.payload.products),
    )
  },
})

export const { increment, decrement, deleteProduct } = productsSlice.actions
