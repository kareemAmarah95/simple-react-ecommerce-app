import React from "react";
import "./OrderScreen.css";
import { useLocation } from "react-router-dom";
function OrderScreen() {
  const location = useLocation();
  console.log(location.state.orders);
  return (
    <div className="orders">
      <div>
        <h3>Your Orders</h3>
        {location.state.orders.map((order) => (
          <div>
            <div className="orderContainer">
              <img
                style={{
                  width: 150,
                  height: 150,
                  display: "block",
                  objectFit: "contain",
                }}
                src={order.image}
                alt=""
              />
              <div className="orderDescription">
                <p style={{ marginTop: 8 }}>{order.title}</p>
                <p style={{ marginTop: 8 }}>
                  {order.description.length > 80
                    ? order.description.substr(0, 80)
                    : order.description}
                </p>
                <p style={{ marginTop: 8 }}>{order.price * order.quantity}$</p>
              </div>

              <div className="orderbuttons">
                <button className="orderButton">Return Products</button>
                <button className="orderButton">Download Invoice</button>
                <button className="orderButton">Rate Products</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderScreen;
