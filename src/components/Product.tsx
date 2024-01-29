import { useAppDispatch, useAppSelector } from "../app/hooks";

import { addToCart } from "../features/cart/cartSlice";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  quantity?: number;
}

export default function Product({
  id,
  image,
  title,
  price,
  description,
  quantity = 1,
}: ProductProps) {
  const dispatch = useAppDispatch(); 

  function handleAddToCart() {
    const product = { id, image, title, price, description, quantity };

    dispatch(addToCart(product));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
