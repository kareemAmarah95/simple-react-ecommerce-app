import React from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function ProductItem({ product }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="productItem">
      <ToastContainer
        position="top-right"
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
      {/* image */}
      <img
        style={{
          width: 200,
          height: 200,
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          objectFit: "contain",
        }}
        src={product.image}
        alt=""
      />
      {/* title aka name */}
      <p style={{ margin: "20px 0px", textAlign: "center" }}>
        {product?.title.length > 30
          ? product.title.substr(0, 30)
          : product.title}
      </p>

      {/* description */}
      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        {product?.description.length > 60
          ? product.description.substr(0, 60)
          : product.description}
      </p>

      {/* price */}
      <p>{product.price}</p>

      {/* Add To Cart Button */}
      {cart.some((x) => x.id === product.id) ? (
        <button
          onClick={() => {
            removeItemFromCart(product);
            toast.error("Order Removed Successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
          className="productItemButton"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(product);
            toast.success("Order Added Successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
          className="productItemButton"
        >
          Add To Cart
        </button>
      )}

      {/* Buy Now Button */}
      <button className="productItemBuy">Buy Now</button>
    </div>
  );
}

export default ProductItem;
