import { type FunctionComponent } from "react"
import { type Product } from "./productsSlice"

interface OrderSumProps {
  products: Product[]
}

const OrderSum: FunctionComponent<OrderSumProps> = ({ products }) => {
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0,
  )
  return (
    <div className="sum">
      <span>
        Итого:
        <span className="total"> {totalPrice} руб.</span>
      </span>
      <br></br>
      <span>Продуктов: {products.length}</span>
    </div>
  )
}

export default OrderSum
