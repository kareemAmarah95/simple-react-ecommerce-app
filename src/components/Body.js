import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Body.css";
import { useSelector } from "react-redux";
function Body() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setProducts(data);
        });
    };
    fetchProducts();
  }, []);
  return (
    <div className="body">
      <div className="container">
        <div className="bodyItems">
          {products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
