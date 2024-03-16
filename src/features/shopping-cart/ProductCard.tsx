import { useAppDispatch } from "../../app/hooks"

import {
  decrement,
  deleteProduct,
  increment,
  type Product,
} from "./productsSlice"

import { type FunctionComponent } from "react"

import styles from "./ShoppingCart.module.css"

interface ProductCardProps {
  id: Product["id"]
  title: Product["title"]
  description: Product["description"]
  img: Product["images"][0]
  quantity: Product["stock"]
  price: Product["price"]
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  id,
  title,
  description,
  img,
  quantity,
  price,
}) => {
  const dispatch = useAppDispatch()

  const hasReachedLowerLimit = quantity === 1
  const hasReachedUpperLimit = quantity === 10

  return (
    <li className={styles.product}>
      <img src={img} alt={title} width="160px" height="136px" />
      <div className={styles.info}>
        <h3 className="title">{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.priceAndQuantity}>
        <span className={styles.price}>{price * quantity}₽</span>
        <div className={styles.quantity}>
          <button
            disabled={hasReachedLowerLimit}
            onClick={() => dispatch(decrement(id))}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className={styles.number}>{quantity}</span>
          <button
            disabled={hasReachedUpperLimit}
            onClick={() => dispatch(increment(id))}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
      <button onClick={() => dispatch(deleteProduct(id))}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  )
}

export default ProductCard
