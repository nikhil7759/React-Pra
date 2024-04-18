import Modal from "../UI/Modal";
import "./Cart.css";

const DUMMY_CART_ITEM = [
  { id: "p1", name: "panner", amount: 200 },
  { id: "p2", name: "chicken", amount: 300 },
];

const Cart = (props) => {
  const addedCartData = DUMMY_CART_ITEM.map((cartitem) => (
    <li key={cartitem.id}>
      {cartitem.name}
      {cartitem.amount}
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className="cart-items">{addedCartData}</ul>
      <div className="total">
        <span>Total Amount </span>
        <span>500</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        <button className="button">Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
