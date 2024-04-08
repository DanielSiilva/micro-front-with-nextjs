import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => (state.cart ? state.cart.items : []));
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItemName = "Novo Item " + Math.floor(Math.random() * 100);
    dispatch(addItem({ name: newItemName }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrinho</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.name}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Adicionar Item</button>
    </div>
  );
}

export default Cart;
