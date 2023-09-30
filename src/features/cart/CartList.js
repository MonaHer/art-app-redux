import { removeFromCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  function handleRemoveFromCart(artwork) {
    dispatch(removeFromCart(artwork));
  }

  function calculateTotalPrice() {
    return cartItems.reduce(
      (total, artwork) => total + artwork.dimensions.height,
      0
    );
  }

  return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((artwork) => (
              <li key={artwork.slug}>
                {artwork.name}
                <button onClick={() => handleRemoveFromCart(artwork)}>
                  Remove from cart
                </button>
              </li>
            ))}
          </ul>
          <p>Price in total: {calculateTotalPrice()}€</p>
        </>
      )}
    </>
  );
}
