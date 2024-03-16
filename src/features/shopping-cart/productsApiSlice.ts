import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { type Product } from "./productsSlice"

interface ProductsApiResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export const productsApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: build => ({
    getProducts: build.query<ProductsApiResponse, void>({
      query: () => "?limit=6&skip=1",
      transformResponse: (response: ProductsApiResponse) => {
        // Меняю загруженное поле "stock" на "выбранное количество товара" с лимитом от 1 до 10
        const changedProductLimits = response.products.map(product => {
          const newLimit = Math.floor((Math.random() + 0.1) * 10)
          product.stock = newLimit
          return product
        })
        return {
          ...response,
          products: changedProductLimits,
        }
      },
    }),
  }),
})

export const { useGetProductsQuery } = productsApiSlice
export default productsApiSlice
