import ProductCard from "./ProductCard"

import { type Product } from "./productsSlice"
import { type FunctionComponent } from "react"

import styles from "./ShoppingCart.module.css"

interface ProductListProps {
  products: Product[]
}

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          img={p.images[0]}
          quantity={p.stock}
          price={p.price}
        />
      ))}
    </ul>
  )
}

export default ProductList
