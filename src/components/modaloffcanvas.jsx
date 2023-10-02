import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Order from './order'; // Import the Order component

export default function ModalOffCanvas(props) {
  const { selectedDish, onClose, onAddToOrder } = props;
  const [show, setShow] = useState(!!selectedDish);
  const [quantity, setQuantity] = useState(1);
  const [orderedItems, setOrderedItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    setShow(!!selectedDish);
    setQuantity(1);
  }, [selectedDish]);

  const totalPrice = selectedDish ? selectedDish.price * quantity : 0;

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToOrder = () => {
    const newItem = { ...selectedDish, quantity, totalPrice };
    setOrderedItems([...orderedItems, newItem]);
    setQuantity(1);
    updateGrandTotal();
  };

  const updateGrandTotal = () => {
    const total = orderedItems.reduce((sum, item) => sum + item.totalPrice, 0);
    setGrandTotal(total);
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      backdrop={false}
      scroll={true}
    >
      <Offcanvas.Header closeButton>
        <div className="text-center">
          <img
            src="/logo.png"
            height="50"
            width="100"
            alt="Quetta-Hotel"
            loading="lazy"
          />
          Order Details
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Order
          selectedDish={selectedDish}
          quantity={quantity}
          totalPrice={totalPrice}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleAddToOrder={handleAddToOrder}
        />

       
      </Offcanvas.Body>
    </Offcanvas>
  );
}
