import React from "react";
import { useSelector } from "react-redux";
//import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const Navbar = () => {
  const Cart = useSelector((state) => state.Cart);
  const { amount } = Cart;
  // console.log(total);
  return (
    <nav>
      <div className="nav-center">
        <h3>John Online Store</h3>
        <div className="nav-container">
          {" "}
          <i className="fas fa-shopping-cart fa-3x">
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
