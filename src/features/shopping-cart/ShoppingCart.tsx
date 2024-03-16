import OrderSum from "./OrderSum"
import ProductList from "./ProductList"

import { useGetProductsQuery } from "./productsApiSlice"
import { useAppSelector } from "../../app/hooks"

import { type FunctionComponent } from "react"

// <ShoppingCart /> состоит из:
// 1. хук useGetProductsQuery() от RTK Query: прописан в "./productsApiSlice". Загружает с dummyjson.com список из 6-ти товаров.
// 2. После загрузки данных с сервера, они перехватываются редюсером .addMatcher() в "./productsSlice" и добавляются в стейт
// 3. Селектор useAppSelector() возвращает в компоненте список продуктов из стейта
// 4. Рендер списка продуктов <ProductList /> и итоговой суммы <OrderSum />

const ShoppingCart: FunctionComponent = () => {
  const { error, isError, isLoading } = useGetProductsQuery()
  const products = useAppSelector(state => state.products)

  if (isError) {
    const msg = error ? `: ${error}` : ""
    return <p>Ошибка загрузки продуктов{msg}</p>
  }

  if (isLoading) {
    return (
      <div>
        <p>Загрузка...</p>
      </div>
    )
  }

  if (products) {
    return (
      <main className="cart">
        <ProductList products={products} />
        <OrderSum products={products} />
      </main>
    )
  }
}

export default ShoppingCart
