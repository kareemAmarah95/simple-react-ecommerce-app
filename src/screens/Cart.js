import React from "react";
import "./Cart.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const [goToOrders, setGoToOrders] = React.useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  //   console.log(total);
  const orders = [...cart];
  const charges = 30;
  const totalPrice = total + charges;
  const dispatch = useDispatch();
  const incrementItemQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementItemQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const navigate = useNavigate();
  const placeOrder = (item) => {
    toast.success("Order Placed Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // if (goToOrders) {
    //   return <Navigate to="/orders" />;
    // }
    setTimeout(() => {
      //   Navigate("/orders", {
      //     state: orders,
      //   });
      //   <Navigate to="/orders" />;

      //   setGoToOrders(true);

      navigate("/orders", {
        replace: true,
        state: { orders, totalPrice },
      });
    }, 3500);

    setTimeout(() => {
      dispatch(cleanCart());
    }, 4000);
  };
  return (
    <>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="cart">
        {/* left part */}
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div className="cartContainer" key={index}>
              {/* image */}
              <div>
                <img
                  src={item.image}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              {/* description */}
              <div className="cartDescription">
                <p>
                  {item.title.length > 60
                    ? item.title.substr(0, 60)
                    : item.title}
                </p>
                <p style={{ marginTop: "10px" }}>
                  {item.description.length > 80
                    ? item.description.substring(0, 80)
                    : item.description}
                </p>
                <p style={{ marginTop: "8px" }}>{item.price}</p>
              </div>
              {/* Buttons */}
              <div className="cartButtonContainer">
                <div className="cartButtons">
                  <div
                    onClick={() => decrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    onClick={() => incrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </div>
                </div>
                <button
                  onClick={() => removeItemFromCart(item)}
                  className="cartButton"
                >
                  Remove Item
                </button>
                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
              </div>
            </div>
          ))}
        </div>
        {/* right part */}
        {total === 0 ? (
          <div>
            <h2>Your Cart Is Empty</h2>
          </div>
        ) : (
          <div className="cartRight">
            {/* location info and button */}
            <div className="cartRightLocationContainer">
              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "gray" }} />
                <div className="cartRightDescription">
                  <p className="cartRightText">Select Your Location</p>
                  <p className="cartRightText">
                    Please Select a location so we can find you!
                  </p>
                  <button className="cartRightButton">Select Location</button>
                </div>
              </div>

              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "gray" }} />
                <div className="cartRightDescription">
                  <p className="cartRightText">Choose Your Saved Location</p>

                  <button className="cartRightButton">Choose Location</button>
                </div>
              </div>
            </div>
            {/* coupon info and description*/}
            <div className="cartRightCoupon">
              <ConfirmationNumberIcon style={{ color: "gray" }} />
              <div style={{ marginLeft: 10 }}>
                <h4 className="cartRightCouponText">Select / Apply Coupon</h4>
                <p className="cartRightCouponsmall">
                  Apply coupons to avail offers on the products
                </p>
              </div>
            </div>
            {/* container for checkout and the total price */}

            <div className="cartRightCheckout">
              <div className="cartRightCheckoutpart">
                <h5>Total Price </h5>
                <h5>{total}</h5>
              </div>

              <div className="cartRightCheckoutpart">
                <h5>Discount </h5>
                <h5>-</h5>
              </div>

              <div className="cartRightCheckoutpart">
                <h5>charges</h5>
                <h5>{charges}</h5>
              </div>

              <div className="cartRightCheckoutpart">
                <h3>Subtotal</h3>
                <h3>{total + charges}</h3>
              </div>
            </div>

            <button onClick={placeOrder} className="cartRightCheckoutButton">
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
