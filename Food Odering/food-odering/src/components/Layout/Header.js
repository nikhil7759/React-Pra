import { Fragment } from "react";

import foodimage from "../../assets/header/food_header.jpg";

import HeaderCartButton from "./HeaderCartButton";

import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>MY FOOD</h1>
        <HeaderCartButton onOpens={props.onOpen} />
      </header>
      <div className="main-image">
        <img src={foodimage} alt="foodimage" />
      </div>
    </Fragment>
  );
};

export default Header;
