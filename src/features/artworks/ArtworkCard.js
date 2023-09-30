import Modal from "react-modal";
import { useState } from "react";
import { addToCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";

export default function ArtworkCard({ artwork }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleAddToCart() {
    dispatch(addToCart(artwork));
  }

  return (
    <>
      <h2>{artwork.name}</h2>
      <p>Price: {artwork.dimensions.height}€</p>
      <button onClick={handleOpenModal}>Show Info</button>
      <button onClick={handleAddToCart}>Add to cart</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Info Modal"
      >
        <h3>
          {artwork.name} by {artwork.artist}, {artwork.year}
        </h3>
        <p>{artwork.genre}</p>
        <img src={artwork.imageSource} alt={artwork.name} />
        <button onClick={handleCloseModal}>Close Info</button>
      </Modal>
    </>
  );
}
