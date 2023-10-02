import { useState, useEffect } from "react";

export default function Order({ selectedDish }) {
  const [orderedItems, setOrderedItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0); // Initialize grandTotal with 0
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Calculate the grand total whenever orderedItems or quantity changes
    const total = orderedItems.reduce((sum, item) => sum + item.totalPrice, 0);
    setGrandTotal(total);
  }, [orderedItems, quantity]);

  const handleAddToOrder = () => {
    const newItem = { ...selectedDish, quantity, totalPrice };
    setOrderedItems([...orderedItems, newItem]);
    setQuantity(1);
  };

  const totalPrice = selectedDish ? selectedDish.price * quantity : 0;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {selectedDish && (
        <>
          <div className="text-center">
            <h4>{selectedDish.dish}</h4>
          </div>
          <div className="text-center">
            <img
              style={{ height: 210, width: 70 }}
              src={selectedDish.image}
              className="w-100"
            />
          </div>
          <div className="text-center">
            <p>Description: {selectedDish.description}</p>
            <p>Category: {selectedDish.category}</p>
            <h6>Price: {selectedDish.price}</h6>
          </div>
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-sm btn-primary me-3"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span>Quantity: {quantity}</span>
              <button
                className="btn btn-sm btn-primary ms-3"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-center">
            <p>Total Price: {totalPrice}</p>
          </div>
          <div className="text-center">
            <button
              className="btn btn-sm btn-primary"
              onClick={handleAddToOrder}
            >
              Add to Order
            </button>
          </div>
          {orderedItems.length > 0 && (
          <div className="text-center">
            <h5>Ordered Items:</h5>
            <ul>
              {orderedItems.map((item, index) => (
                <li key={index}>
                  {item.dish} - Order.Quantity: {item.quantity}, Total Price: {item.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        )}
          <div className="text-center">
            <h5>Grand Total:</h5>
            <p>{grandTotal}</p>
          </div>
        </>
      )}
    </>
  );
}
