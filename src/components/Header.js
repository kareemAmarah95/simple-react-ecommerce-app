import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="header">
        {/* logo image */}
        <div>
          <img
            style={{ width: 120, height: 40, marginTop: 10 }}
            className="image"
            src="https://links.papareact.com/f90"
          />
        </div>

        {/* search bar */}
        <div className="headerInputContainer">
          <input
            className="headerInput"
            type="text"
            placeholder="search items or products"
          />
          <SearchOutlinedIcon
            style={{ color: "white", marginLeft: 4, marginTop: 2 }}
          />
        </div>

        <div>
          <h4 className="headerText">Hello John</h4>
          <h4 className="headerText">Accounts & Lists</h4>
        </div>
        <div>
          <h4 className="headerText">Returns</h4>
          <h4 className="headerText"> & Orders</h4>
        </div>
        {/* <div>
        <h4>Returns</h4>

        <h4>& Orders</h4>
      </div> */}
        <div
          onClick={navigateToCart}
          style={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <ShoppingCartIcon
            style={{
              color: "white",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 14,
              right: 14,
              backgroundColor: "white",
              width: 14,
              height: 14,
              borderRadius: 7,
              textAlign: "center",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            {cart.length}
          </span>
        </div>
        {/* place and number */}
        <div>
          <h4 className="headerText">Egypt</h4>
          <h4 className="headerText">38439493430</h4>
        </div>
      </div>

      {/* Bottom Header Part */}
      <div className="headerBottom">
        <MenuIcon style={{ color: "white", paddingTop: 4 }} />
        <p className="headerBottomText">Buy</p>
        <p className="headerBottomText">Healthy Products</p>
        <p className="headerBottomText">Sell</p>
        <p className="headerBottomText">Baby</p>
        <p className="headerBottomText">Health & LifeStyle</p>
        <p className="headerBottomText">Prime Video</p>
        <p className="headerBottomText">Super sale</p>
        <p className="headerBottomText">Offers</p>
        <p className="headerBottomText">Exciting Offers</p>
        <p className="headerBottomText">Subscribe</p>
      </div>
    </>
  );
}

export default Header;
